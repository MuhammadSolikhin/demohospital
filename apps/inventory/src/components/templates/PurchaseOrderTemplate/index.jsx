import React from 'react';
import PurchaseOrder from '../../organisms/PurchaseOrder';

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));

const PurchaseOrderTemplate = () => {
    return (
        <div className="purchase-order space-y-8">
            <Breadcrumb title='Purchase Order' />
            <div className="purchase-order-content">
                <PurchaseOrder />
            </div>
        </div>
    )
}

export default PurchaseOrderTemplate;
