import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

try {
  console.log("=== CHECKING FOR CHANGES ===");
  const diff = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
  if (diff) {
    console.log("=== CHANGED FILES FOUND ===");
    execSync('git add .');
    execSync('git commit -m "style: remove duplicate outer contact section layout and make enquiry form full width on digital marketing page"');
    execSync('git push origin main');
    console.log("=== PUSH COMPLETE ===");
  } else {
    console.log("=== NO CHANGES FOUND TO COMMIT ===");
  }
} catch (err) {
  console.error("=== GIT SCRIPT ERROR ===", err.message);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('react-icons')) {
              return 'vendor-icons';
            }
            return 'vendor-others';
          }
        }
      }
    },
    chunkSizeWarningLimit: 800,
  }
})




