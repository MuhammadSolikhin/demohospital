const remotes = [
    {
      module: './App',
      name: 'auth',
      path: '/*',
      url: 'http://localhost:5174/assets/remoteEntry.js',
    },
    {
      module: './App',
      name: 'dashboard',
      path: '/dashboard/*',
      url: 'http://localhost:5172/assets/remoteEntry.js',
    },
    {
      module: './App',
      name: 'appointments',
      path: '/appointments/*',
      url: 'http://localhost:5173/assets/remoteEntry.js',
    },
    {
      module: './App',
      name: 'patients',
      path: '/patients/*',
      url: 'http://localhost:5175/assets/remoteEntry.js',
    },
    {
      module: './App',
      name: 'inventory',
      path: '/inventory/*',
      url: 'http://localhost:5176/assets/remoteEntry.js',
    },
    {
      module: './App',
      name: 'assets',
      path: '/assets/*',
      url: 'http://localhost:5177/assets/remoteEntry.js',
    },
    {
      module: './App',
      name: 'pharmacy',
      path: '/pharmacy/*',
      url: 'http://localhost:5178/assets/remoteEntry.js',
    },
  ];

export default remotes;
