import React from 'react';
import LatestPurchaseOrderTable from "../../molecules/Tables/PurchaseOrderTable/LatestPurchaseOrderTable";
import { currency } from '../../../helpers/currency.helper';
import { useNavigate } from "react-router-dom";

const Typography = React.lazy(() => import('components/Typography'));
const Button = React.lazy(() => import('components/Button'));

const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'total_price', headerName: 'Total Price (Rp)', width: 200 },
];

const rows = [
    { id: 1, name: 'Item 1', date: '2025-03-09', total_price: currency(100000) },
    { id: 2, name: 'Item 2', date: '2025-03-08', total_price: currency(200000) },
    { id: 3, name: 'Item 3', date: '2025-03-07', total_price: currency(150000) },
    { id: 4, name: 'Item 4', date: '2025-03-06', total_price: currency(50000) },
];

const LatestPurchaseOrder = () => {
    const navigate = useNavigate();

    const onEdit = () => {
        console.log('edit');
    }

    const onDelete = () => {
        console.log('delete');
    }

    return (
        <div className="purchase-order">
            <div className="flex items-center justify-between">
                <Typography variant='p' className='font-semibold'>Latest PO</Typography>
                <Button
                    onClick={() => navigate('/inventory/purchase-order/create')}
                    variant="none"
                    className="text-primary"
                    icon="gridicons:add"
                    label="Add New PO"
                />
            </div>
            <LatestPurchaseOrderTable
                columns={columns}
                rows={rows}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </div>
    )
}

export default LatestPurchaseOrder;
