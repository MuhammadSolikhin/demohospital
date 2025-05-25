import React from 'react';
import AppointmentOverviewPage from "../pages/overviews/Index.jsx";
import AppointmentCreatePage from "../pages/overviews/create/Index.jsx";
import AppointmentGuestCreatePage from "../pages/overviews/create-from-link/Index";
import AppointmentMonitorPage from '../pages/monitors/Index';
import env from '../helpers/env.helper';

const ErrorNotFound = React.lazy(() => import('components/ErrorNotFound'));

const path = env('VITE_APP_PRODUCTION') == 'true'
    ? '' 
    : '/appointments';

const routes = [
    {
        path: `${path}/overviews`,
        Element: AppointmentOverviewPage,
    },
    {
        path: `${path}/create`,
        Element: AppointmentCreatePage,
    },
    {
        path: `${path}/guest/create`,
        Element: AppointmentGuestCreatePage,
    },
    {
        path: `${path}/monitoring`,
        Element: AppointmentMonitorPage,
    },
    {
        path: '*',
        Element: ErrorNotFound,
    }
];

export default routes;
