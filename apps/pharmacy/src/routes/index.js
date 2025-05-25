import React from 'react';
import env from '../helpers/env.helper';
import PharmacyPage from '../pages/Pharmacy';
import PharmacyCreatePage from '../pages/Pharmacy/Create';
import PharmacyEditPage from '../pages/Pharmacy/Edit';

const ErrorNotFound = React.lazy(() => import('components/ErrorNotFound'));

const path = env('VITE_APP_PRODUCTION') == 'true'
    ? '' 
    : '/pharmacy';

const routes = [
    {
        path: `${path}/`,
        Element: PharmacyPage,
    },
    {
        path: `${path}/create`,
        Element: PharmacyCreatePage,
    },
    {
        path: `${path}/{id}/edit`,
        Element: PharmacyEditPage,
    },
    {
        path: '*',
        Element: ErrorNotFound,
    }
];

export default routes;
