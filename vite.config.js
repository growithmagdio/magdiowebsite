import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

function prerenderPlugin() {
  return {
    name: 'prerender-static-plugin',
    closeBundle() {
      console.log('🚀 [Vite Plugin] Triggering automatic static pre-rendering...');
      try {
        execSync('node prerender-static.js', { stdio: 'inherit' });
      } catch (err) {
        console.error('❌ Static pre-render failed:', err);
        throw err;
      }
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerenderPlugin()],
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    cssMinify: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  }
})




