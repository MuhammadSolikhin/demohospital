import React from "react";
import DashboardPage from "../pages/DashboardPage.jsx";
import env from "../helpers/env.helper";

const ErrorNotFound = React.lazy(() => import('components/ErrorNotFound'));
const path = env('VITE_APP_PRODUCTION') == 'true' ? '' : '/dashboard';

const routes = [
    {
        path: `${path}/`,
        Element: DashboardPage
    },
    {
        path: '*',
        Element: ErrorNotFound,
    }
];

export default routes;
