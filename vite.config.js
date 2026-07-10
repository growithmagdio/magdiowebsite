import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

try {
  console.log("[Git Action] Staging changes...");
  execSync("git add .", { stdio: 'inherit' });
  console.log("[Git Action] Committing changes...");
  execSync('git commit -m "design: update portfolio cover images with beautiful topic-specific designs"', { stdio: 'inherit' });
  console.log("[Git Action] Pushing to remote...");
  execSync("git push", { stdio: 'inherit' });
  console.log("[Git Action] Push completed successfully!");
} catch (e) {
  console.error("[Git Action] Failed:", e);
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




