import React from 'react';
import env from '../helpers/env.helper';
import AssetPage from '../pages/Asset';

const ErrorNotFound = React.lazy(() => import('components/ErrorNotFound'));

const path = env('VITE_APP_PRODUCTION') == 'true'
    ? '' 
    : '/assets';

const routes = [
    {
        path: `${path}/`,
        Element: AssetPage,
    },
    {
        path: '*',
        Element: ErrorNotFound,
    }
];

export default routes;
