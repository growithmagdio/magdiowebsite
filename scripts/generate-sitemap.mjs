// Runs after the static build. Builds dist/sitemap.xml from the pages that were
// actually prerendered, so the sitemap (used by Google and the Voiceflow chatbot)
// only ever lists URLs that return full HTML content.
import { readdir, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const BASE_URL = 'https://www.magdio.com';
const DIST = join(process.cwd(), 'dist');
const EXCLUDE = new Set(['/admin', '/404', '/blogs']);
const EXCLUDE_PREFIXES = ['/blogs/']; // duplicates of /blog/*

async function findPages(dir, route = '') {
  const pages = [];
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry);
    if ((await stat(full)).isDirectory()) {
      if (entry === 'assets' || entry.startsWith('.')) continue;
      pages.push(...(await findPages(full, `${route}/${entry}`)));
    } else if (entry === 'index.html') {
      pages.push(route || '/');
    }
  }
  return pages;
}

const now = new Date().toISOString();
const pages = (await findPages(DIST))
  .filter((p) => !EXCLUDE.has(p) && !EXCLUDE_PREFIXES.some((x) => p.startsWith(x)))
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${BASE_URL}${p === '/' ? '/' : p}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? '1.0' : p.startsWith('/services/') ? '0.9' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

await writeFile(join(DIST, 'sitemap.xml'), xml);
console.log(`[sitemap] ${pages.length} URLs written to dist/sitemap.xml`);
