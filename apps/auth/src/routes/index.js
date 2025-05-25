import React from 'react';
import LoginPage from '../pages/login/Index.jsx';
import ForgotPasswordPage from '../pages/forgot-password/Index.jsx';
import ResetPasswordPage from '../pages/reset-password/Index.jsx';

const ErrorNotFound = React.lazy(() => import('components/ErrorNotFound'));

const routes = [
    {
        path: `/`,
        Element: LoginPage,
    },
    {
        path: `/auth/forgot-password`,
        Element: ForgotPasswordPage,
    },
    {
        path: `/auth/reset-password`,
        Element: ResetPasswordPage,
    },
    {
        path: '*',
        Element: ErrorNotFound,
    }
];

export default routes;
