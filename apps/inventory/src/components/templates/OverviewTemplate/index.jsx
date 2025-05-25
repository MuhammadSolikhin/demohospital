import React from 'react';
import OverviewBoard from '../../organisms/OverviewBoard';
import ExpiredInventory from '../../organisms/ExpiredInventory';
import AllInventory from '../../organisms/AllInventory';
import LatestPurchaseOrder from '../../organisms/LatestPurchaseOrder';

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Typography = React.lazy(() => import('components/Typography'));

const OverviewTemplate = () => {
    return (
        <div className="inventory space-y-8">
            <Breadcrumb title='Inventory' />
            
            <div className="overviews-board">
                <OverviewBoard />
            </div>

            <div className="expired-inventory">
                <ExpiredInventory />
            </div>

            <div className="inventories space-y-8">
                <Typography variant='h4'>List Inventory</Typography>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <AllInventory />
                    </div>
                    <div className="col-span-1">
                        <LatestPurchaseOrder />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverviewTemplate;
