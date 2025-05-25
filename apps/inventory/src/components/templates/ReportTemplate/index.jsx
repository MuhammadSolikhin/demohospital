import React from 'react';
import ReportTable from '../../molecules/Tables/ReportTable';

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));

const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'quantity', headerName: 'Quantity', width: 200 },
    { field: 'payment_status', headerName: 'Payment', width: 200 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'from', headerName: 'From', width: 200 },
    { field: 'to', headerName: 'To', width: 200 },
];

const rows = [
    {
        id: 1, // Each row should have a unique id
        name: 'John Doe',
        quantity: 5,
        payment_status: 'Paid',
        description: 'Purchase of goods',
        date: '2025-03-10',
        from: 'Supplier A',
        to: 'Warehouse X',
    },
    {
        id: 2,
        name: 'Jane Smith',
        quantity: 10,
        payment_status: 'Pending',
        description: 'Subscription fee',
        date: '2025-03-12',
        from: 'Service Provider Y',
        to: 'Customer B',
    },
    {
        id: 3,
        name: 'Alan Turing',
        quantity: 15,
        payment_status: 'Paid',
        description: 'Consulting services',
        date: '2025-03-15',
        from: 'Consultant Z',
        to: 'Client C',
    },
    {
        id: 4,
        name: 'Ada Lovelace',
        quantity: 8,
        payment_status: 'Overdue',
        description: 'Software license',
        date: '2025-03-18',
        from: 'Software Company A',
        to: 'Tech Firm D',
    },
    {
        id: 5,
        name: 'Grace Hopper',
        quantity: 20,
        payment_status: 'Paid',
        description: 'Equipment order',
        date: '2025-03-20',
        from: 'Manufacturer E',
        to: 'Office Supplies Co.',
    },
];

const ReportTemplate = () => {
    const onEdit = () => {
        console.log('edit');
    }

    const onDelete = () => {
        console.log('delete');
    }
    
    return (
        <div className="report space-y-8">
            <div className="flex items-center justify-between">
                <Breadcrumb title='Report' />
            </div>
            <ReportTable
                title='54 Inventory this month'
                rows={rows}
                columns={columns}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </div>
    )
}

export default ReportTemplate;
