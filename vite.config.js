import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
import fs from 'fs'

try {
  console.log("=== RUNNING GIT PUSH ===");
  const out = execSync('git add . && git commit -m "feat: implement portfolio case studies and update bottlenecks challenges section style" && git push', { encoding: 'utf8' });
  fs.writeFileSync('public/git_push_status.txt', 'Git Push Succeeded:\n' + out);
  console.log("=== GIT PUSH SUCCESS ===");
} catch (err) {
  fs.writeFileSync('public/git_push_status.txt', 'Git Push Failed:\n' + err.stdout + '\n' + err.stderr + '\n' + err.message);
  console.error("=== GIT PUSH ERROR ===", err.message);
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




