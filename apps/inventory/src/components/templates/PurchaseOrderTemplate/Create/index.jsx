import React from 'react';
import PurchaseOrderForm from '../../../molecules/Form/PurchaseOrderForm';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));

const PurchaseOrderCreateTemplate = () => {
    const navigate = useNavigate();

    const onClickCancel = () => {
        return navigate('/inventory/purchase-order');
    }

    return (
        <div className="create-purchase-order-page space-y-8">
            <Breadcrumb title='Add Purchase Order' back='/inventory/purchase-order' />
            <div className="create-purchase-order-content">
                <PurchaseOrderForm
                    onClickCancel={onClickCancel}
                />
            </div>
        </div>
    )
}

export default PurchaseOrderCreateTemplate;
