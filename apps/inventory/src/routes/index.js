import React from 'react';
import env from '../helpers/env.helper';
import OverviewPage from '../pages/Overview';
import ReceivePage from '../pages/Receive';
import ReportPage from '../pages/Report';
import WarehousePage from '../pages/Warehouse';
import SupplierPage from '../pages/Supplier';
import SupplierDetailPage from '../pages/Supplier/[slug]';
import PurchaseOrderPage from '../pages/PurchaseOrder';
import PurchaseOrderCreatePage from '../pages/PurchaseOrder/Create';
import InventoryCreatePage from '../pages/Inventory/Create';
import InventoryEditPage from '../pages/Inventory/Edit';

const ErrorNotFound = React.lazy(() => import('components/ErrorNotFound'));

const path = env('VITE_APP_PRODUCTION') == 'true'
    ? '' 
    : '/inventory';

const routes = [
    {
        path: `${path}/overview`,
        Element: OverviewPage,
    },
    {
        path: `${path}/receive`,
        Element: ReceivePage,
    },
    {
        path: `${path}/report`,
        Element: ReportPage,
    },
    {
        path: `${path}/warehouse`,
        Element: WarehousePage,
    },
    {
        path: `${path}/supplier`,
        Element: SupplierPage,
    },
    {
        path: `${path}/purchase-order`,
        Element: PurchaseOrderPage,
    },
    {
        path: `${path}/purchase-order/create`,
        Element: PurchaseOrderCreatePage,
    },
    {
        path: `${path}/supplier/:id`,
        Element: SupplierDetailPage,
    },
    {
        path: `${path}/create`,
        Element: InventoryCreatePage,
    },
    {
        path: `${path}/:id/edit`,
        Element: InventoryEditPage,
    },
    {
        path: '*',
        Element: ErrorNotFound,
    }
];

export default routes;
