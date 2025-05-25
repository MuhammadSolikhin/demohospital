import React from 'react';
import PurchaseOrderTable from '../../molecules/Tables/PurchaseOrderTable/PurchaseOrderTable';
import { useNavigate } from 'react-router-dom';

const Tab = React.lazy(() => import('components/Tab'));
const TabSection = React.lazy(() => import('components/TabSection'));
const TabAction = React.lazy(() => import('components/TabAction'));
const Button = React.lazy(() => import('components/Button'));

const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'id_code', headerName: 'ID Code', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'supplier', headerName: 'Supplier', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 },
    { field: 'total_price', headerName: 'Total Price (Rp)', width: 200 },
];

const rows = [
    {
        id: 1,  // You can add a unique ID for each row
        name: 'Item 1',
        id_code: '12345',
        date: '2025-04-01',
        supplier: 'Supplier A',
        status: 'Completed',
        total_price: 100000,
    },
    {
        id: 2,
        name: 'Item 2',
        id_code: '67890',
        date: '2025-04-02',
        supplier: 'Supplier B',
        status: 'Pending',
        total_price: 200000,
    },
    {
        id: 3,
        name: 'Item 3',
        id_code: '11223',
        date: '2025-04-03',
        supplier: 'Supplier C',
        status: 'Shipped',
        total_price: 150000,
    },
    {
        id: 4,
        name: 'Item 4',
        id_code: '44556',
        date: '2025-04-04',
        supplier: 'Supplier D',
        status: 'Cancelled',
        total_price: 250000,
    },
];

const PurchaseOrder = () => {
    const navigate = useNavigate();

    const onEdit = () => {
        console.log('edit');
    }

    const onDelete = () => {
        console.log('delete');
    }

    const onPrint = () => {
        console.log('print');
    }

    return (
        <div className='purchase-order'>
            <Tab>
                <TabAction>
                    <Button
                        onClick={() => navigate('/inventory/purchase-order/create')}
                        variant="none"
                        className="text-primary"
                        icon="gridicons:add"
                        label="Add New PO"
                    />
                </TabAction>
                <TabSection title='All'>
                    <PurchaseOrderTable 
                        columns={columns}
                        rows={rows}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onPrint={onPrint}
                        title={'1 Purchase Order this month'}
                    />
                </TabSection>
                <TabSection title='Progress'>
                    <PurchaseOrderTable
                        columns={columns}
                        rows={rows}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onPrint={onPrint}
                        title={'2 Purchase Order this month'}
                    />
                </TabSection>
                <TabSection title='Complated'>
                    <PurchaseOrderTable
                        columns={columns}
                        rows={rows}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onPrint={onPrint}
                        title={'3 Purchase Order this month'}
                    />
                </TabSection>
                <TabSection title='Canceled'>
                    <PurchaseOrderTable
                        columns={columns}
                        rows={rows}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onPrint={onPrint}
                        title={'4 Purchase Order this month'}
                    />
                </TabSection>
                <TabSection title='Draft'>
                    <PurchaseOrderTable
                        columns={columns}
                        rows={rows}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onPrint={onPrint}
                        title={'5 Purchase Order this month'}
                    />
                </TabSection>
            </Tab>
        </div>
    )
}

export default PurchaseOrder;
