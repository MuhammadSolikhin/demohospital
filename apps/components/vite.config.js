import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const baseDomain = process.env.VITE_REMOTE_DOMAIN || 'http://localhost';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'components',
      filename: 'remoteEntry.js', 
      remotes: {
        'components':`${baseDomain}:5170/assets/remoteEntry.js`,
      },
      exposes: {
        './Brand': './src/components/atoms/Brand.jsx',
        './Button': './src/components/atoms/Button.jsx',
        './Typography': './src/components/atoms/Typography.jsx',
        './UserProfile': './src/components/atoms/UserProfile.jsx',
        './Icon': './src/components/atoms/Icon.jsx',
        './Link': './src/components/atoms/Link.jsx',
        './Badge': './src/components/atoms/Badge.jsx',
        './CardHeader': './src/components/atoms/CardHeader.jsx',
        './CardBody': './src/components/atoms/CardBody.jsx',
        './CardFooter': './src/components/atoms/CardFooter.jsx',
        './Card': './src/components/molecules/Card.jsx',
        './Input': './src/components/molecules/Input.jsx',
        './Textarea': './src/components/molecules/Textarea.jsx',
        './Select': './src/components/molecules/Select.jsx',
        './Checkbox': './src/components/molecules/Checkbox.jsx',
        './Breadcrumb': './src/components/molecules/Breadcrumb.jsx',
        './Dropdown': './src/components/molecules/Dropdown.jsx',
        './LineChart': './src/components/molecules/LineChart.jsx',
        './DoctorCard': './src/components/molecules/DoctorCard.jsx',
        './Calendar': './src/components/molecules/Calendar.jsx',
        './Schedule': './src/components/molecules/Schedule/Index.jsx',
        './Table': './src/components/molecules/Table.jsx',
        './Tab': './src/components/molecules/Tab.jsx',
        './TabSection': './src/components/molecules/TabSection.jsx',
        './TabAction': './src/components/molecules/TabAction.jsx',
        './FormGroup': './src/components/molecules/FormGroup.jsx',
        './BoardCard': './src/components/molecules/BoardCard.jsx',
        './Footer': './src/components/organisms/Footer.jsx',
        './Header': './src/components/organisms/Header.jsx',
        './Sidebar': './src/components/organisms/Sidebar.jsx',
        './Loading': './src/components/organisms/Loading.jsx',
        './Modal': './src/components/molecules/Modal.jsx',
        './ToastProvider': './src/providers/toast/ToastProvider.jsx',
        './Toast': './src/providers/toast/Toast.jsx',
        './Alert': './src/providers/alert/Alert.jsx',
        './ErrorNotFound': './src/components/templates/ErrorNotFound.jsx',
      },
      shared: [
        'react',
        'react-dom',
        'react-router-dom',
        'react-toastify',
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
    port: 5171,
  },
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  },
});
