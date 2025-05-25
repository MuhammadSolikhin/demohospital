export function getRemoteConfigs(baseDomain = 'http://localhost') {
  return [
    {
      module: './App',
      name: 'auth',
      path: '/*',
      url: `${baseDomain}:5174/assets/remoteEntry.js`,
    },
    {
      module: './App',
      name: 'dashboard',
      path: '/dashboard/*',
      url: `${baseDomain}:5172/assets/remoteEntry.js`,
    },
    {
      module: './App',
      name: 'appointments',
      path: '/appointments/*',
      url: `${baseDomain}:5173/assets/remoteEntry.js`,
    },
    {
      module: './App',
      name: 'patients',
      path: '/patients/*',
      url: `${baseDomain}:5175/assets/remoteEntry.js`,
    },
    {
      module: './App',
      name: 'inventory',
      path: '/inventory/*',
      url: `${baseDomain}:5176/assets/remoteEntry.js`,
    },
    {
      module: './App',
      name: 'assets',
      path: '/assets/*',
      url: `${baseDomain}:5177/assets/remoteEntry.js`,
    },
    {
      module: './App',
      name: 'pharmacy',
      path: '/pharmacy/*',
      url: `${baseDomain}:5178/assets/remoteEntry.js`,
    },
  ];

}

const baseDomain = process.env.VITE_REMOTE_DOMAIN || 'http://localhost';
const remotes = getRemoteConfigs(baseDomain);
export default remotes;