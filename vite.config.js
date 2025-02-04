import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CryptoPulse/', // Replace 'CryptoPulse' with your GitHub repository name
});
