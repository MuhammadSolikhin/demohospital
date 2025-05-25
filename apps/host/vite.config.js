import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { getRemoteConfigs } from './remotes.config.js';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const baseDomain = env.VITE_REMOTE_DOMAIN || 'http://localhost';

  const remotes = {};
  const remoteConfigs = getRemoteConfigs(baseDomain);
  remoteConfigs.forEach((remoteConfig) => {
    remotes[remoteConfig.name] = remoteConfig.url;
  });
  return defineConfig({
    plugins: [
      react(),
      federation({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
          'components': 'http://localhost:5171/assets/remoteEntry.js',
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
};
