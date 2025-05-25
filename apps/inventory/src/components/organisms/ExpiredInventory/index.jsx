import React from 'react';
import ExpiredInventoryTable from '../../molecules/Tables/InventoryTable/ExpiredInventoryTable';

const Tab = React.lazy(() => import('components/Tab'));
const TabSection = React.lazy(() => import('components/TabSection'));

const expiredItemsColumns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'total_qty', headerName: 'Total Quantity', width: 200 },
    { field: 'output_qty', headerName: 'Output Quantity', width: 200 },
    { field: 'payment_date', headerName: 'Payment Date', width: 200 },
    { field: 'expired_date', headerName: 'Expired Date', width: 200 },
    { 
        field: 'qr',
        headerName: 'QR Code',
        width: 200,
        renderCell: (params) => <img src={params.row.qr} alt="QR Code" />
    },
];

const almostExpiredItemsColumns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'total_qty', headerName: 'Total Quantity', width: 200 },
    { field: 'output_qty', headerName: 'Output Quantity', width: 200 },
    { field: 'payment_date', headerName: 'Payment Date', width: 200 },
    { field: 'expired_date', headerName: 'Expired Date', width: 200 },
    { 
        field: 'qr',
        headerName: 'QR Code',
        width: 200,
        renderCell: (params) => <img src={params.row.qr} alt="QR Code" />
    },
];

const expiredItemsRows = [
    { 
        id: 1, 
        name: 'Item 1', 
        total_qty: 100, 
        output_qty: 50, 
        payment_date: '2021-09-01', 
        expired_date: '2021-09-30',
        qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Item1'
    },
    { 
        id: 2, 
        name: 'Item 2', 
        total_qty: 200, 
        output_qty: 100, 
        payment_date: '2021-09-02', 
        expired_date: '2021-09-29',
        qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Item2'
    },
    { 
        id: 3, 
        name: 'Item 3', 
        total_qty: 300, 
        output_qty: 150, 
        payment_date: '2021-09-03', 
        expired_date: '2021-09-28',
        qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Item3'
    },
    { 
        id: 4, 
        name: 'Item 4', 
        total_qty: 400, 
        output_qty: 200, 
        payment_date: '2021-09-04', 
        expired_date: '2021-09-27',
        qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Item4'
    },
    { 
        id: 5, 
        name: 'Item 5', 
        total_qty: 500, 
        output_qty: 250, 
        payment_date: '2021-09-05', 
        expired_date: '2021-09-26',
        qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Item5'
    },
];

const almostExpiredItemsRows = [
    { 
        id: 1, 
        name: 'Item 1', 
        total_qty: 100, 
        output_qty: 50, 
        payment_date: '2021-09-01', 
        expired_date: '2021-09-30',
        qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Item1'
    },
    { 
        id: 2, 
        name: 'Item 2', 
        total_qty: 200, 
        output_qty: 100, 
        payment_date: '2021-09-02', 
        expired_date: '2021-09-29',
        qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Item2'
    },
    { 
        id: 3, 
        name: 'Item 3', 
        total_qty: 300, 
        output_qty: 150, 
        payment_date: '2021-09-03', 
        expired_date: '2021-09-28',
        qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Item3'
    },
    { 
        id: 4, 
        name: 'Item 4', 
        total_qty: 400, 
        output_qty: 200, 
        payment_date: '2021-09-04', 
        expired_date: '2021-09-27',
        qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Item4'
    },
    { 
        id: 5, 
        name: 'Item 5', 
        total_qty: 500, 
        output_qty: 250, 
        payment_date: '2021-09-05', 
        expired_date: '2021-09-26',
        qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Item5'
    },
];

const ExpiredInventory = () => {
    const onEdit = () => {
        console.log('Edit Inventory Expired Items');
    }
    
    const onDelete = () => {
        console.log('Delete Inventory Expired Items');
    }
    
    return (
        <div className="inventory">
            <Tab>
                <TabSection title='Expired Items'>
                    <ExpiredInventoryTable
                        title={'54 Inventory this month'}
                        rows={expiredItemsRows}
                        columns={expiredItemsColumns}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </TabSection>
                <TabSection title='Almost Expired Items'>
                    <ExpiredInventoryTable
                        title={'125 Inventory this month'}
                        rows={almostExpiredItemsRows}
                        columns={almostExpiredItemsColumns}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </TabSection>
            </Tab>
        </div>
    )
}

export default ExpiredInventory;
