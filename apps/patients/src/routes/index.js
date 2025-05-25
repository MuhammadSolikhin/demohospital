import React from 'react';
import AllPatientPage from '../pages/patients/all/Index';
import env from '../helpers/env.helper';
import CreatePatientPage from '../pages/patients/all/create/Index';
import EditPatientPage from '../pages/patients/all/edit/Index';
import InPatientPage from '../pages/patients/in/Index';
import OutPatientPage from '../pages/patients/out/Index';
import BirthPatientPage from '../pages/births/Index';
import DeathPatientPage from '../pages/deaths/Index';

const ErrorNotFound = React.lazy(() => import('components/ErrorNotFound'));

const path = env('VITE_APP_PRODUCTION') == 'true'
    ? '' 
    : '/patients';

const routes = [
    {
        path: `${path}/all`,
        Element: AllPatientPage,
    },
    {
        path: `${path}/in`,
        Element: InPatientPage,
    },
    {
        path: `${path}/out`,
        Element: OutPatientPage,
    },
    {
        path: `${path}/birth`,
        Element: BirthPatientPage,
    },
    {
        path: `${path}/death`,
        Element: DeathPatientPage,
    },
    {
        path: `${path}/create`,
        Element: CreatePatientPage,
    },
    {
        path: `${path}/:id/edit`,
        Element: EditPatientPage,
    },
    {
        path: '*',
        Element: ErrorNotFound,
    }
];

export default routes;
