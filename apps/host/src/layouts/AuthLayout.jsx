import React from "react";
import { Outlet } from "react-router-dom";
import useLanguage from "../hooks/thems/useLanguage";

const Header = React.lazy(() => import('components/Header'))
const Sidebar = React.lazy(() => import('components/Sidebar'))

const menus = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'fa6-solid:house',
        children: [],
    },
    {
        name: 'Appointments',
        url: '/appointments',
        icon: 'ri:calendar-fill',
        children: [
            {
                name: 'Overview',
                url: '/appointments/overviews',
                icon: 'subway:menu',
                children: [],
            },
            {
                name: 'Monitoring',
                url: '/appointments/monitoring',
                icon: 'subway:menu',
                children: [],
            }
        ],
    },
    {
        name: 'Staff',
        url: '/staff',
        icon: 'fa:users',
        children: [
            {
                name: 'All Staff',
                url: '/staff',
            },
            {
                name: 'Medical Staff',
                url: '/staff/medical',
            },
            {
                name: 'Non-Medical Staff',
                url: '/staff/non-medical',
            },
        ],
    },
    {
        name: 'Patients',
        url: '/patients',
        icon: 'fa6-solid:hospital-user',
        children: [
            {
                name: 'All Patient',
                url: '/patients/all',
            },
            {
                name: 'In Patient',
                url: '/patients/in',
            },
            {
                name: 'Out Patient',
                url: '/patients/out',
            },
            {
                name: 'Birth',
                url: '/patients/birth',
            },
            {
                name: 'Death',
                url: '/patients/death',
            },
        ],
    },
    {
        name: 'Billing',
        url: '/billing',
        icon: 'fa-solid:cash-register',
    },
    {
        name: 'Pharmacy',
        url: '/pharmacy',
        icon: 'material-symbols:stethoscope',
    },
    {
        name: 'Inventory',
        url: '/inventory',
        icon: 'fluent:briefcase-12-filled',
        children: [
            {
                name: 'Overview',
                url: '/inventory/overview'
            },
            {
                name: 'Purchase Order',
                url: '/inventory/purchase-order'
            },
            {
                name: 'Receive',
                url: '/inventory/receive'
            },
            {
                name: 'Analytics',
                url: '/inventory/analytics'
            },
            {
                name: 'Supplier',
                url: '/inventory/supplier'
            },
            {
                name: 'Report',
                url: '/inventory/report'
            },
            {
                name: 'Warehouse',
                url: '/inventory/warehouse'
            },
        ]
    },
    {
        name: 'Asset',
        url: '/assets',
        icon: 'material-symbols:widgets',
    },
]

const AuthLayout = () => {
    const {
        language,
        onChangeLanguage,
    } = useLanguage();

    return (
        <div className="w-full">
            <aside className="group sidebar fixed top-0 left-0 z-20">
                <Sidebar
                    menus={menus}
                />
            </aside>

            <header className="fixed z-10 left-0 top-0 w-full">
                <Header
                    className="xl:!pl-80 !pl-40"
                    language={language}
                    onChangeLanguage={onChangeLanguage}
                />
            </header>
            
            <main className="w-full xl:pl-72 pl-32 pt-12 pb-12">
                <div className="content min-h-[80vh] py-14 px-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default AuthLayout;
