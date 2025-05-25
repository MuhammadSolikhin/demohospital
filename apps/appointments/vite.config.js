import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'appointments',
      remotes: {
        'components': 'http://localhost:5171/assets/remoteEntry.js',
      },
      exposes: {
        './App': './src/App.jsx',
      },
      shared: [
        'react',
        'react-dom',
        'react-router-dom',
        'tailwindcss',
        'autoprefixer'
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    assetsDir: 'assets',
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
  },
  server: {
    port: 5173,
  },
})
