import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { getRemoteConfigs } from './remotes.config.js';

console.log('VITE_REMOTE_DOMAIN:', process.env.VITE_REMOTE_DOMAIN);

const baseDomain = process.env.VITE_REMOTE_DOMAIN || 'http://localhost';

const remotes = {};
const remoteConfigs = getRemoteConfigs(baseDomain);
remoteConfigs.forEach((remoteConfig) => {
  remotes[remoteConfig.name] = remoteConfig.url;
});

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        'components': `${baseDomain}:5171/assets/remoteEntry.js`,
        ...remotes,
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
    port: 5170,
  },
});
