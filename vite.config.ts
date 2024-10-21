import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Manually split vendor code (e.g., node_modules) into a separate chunk
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // This creates a separate chunk for node_modules
          }
        }
      }
    },
    // Increase the chunk size warning limit to 1000 KB
    chunkSizeWarningLimit: 1000,
  }
});
