import React from 'react';
import ReceiveTable from '../../molecules/Tables/ReceiveTable';

const Tab = React.lazy(() => import('components/Tab'));
const TabSection = React.lazy(() => import('components/TabSection'));

const columns = [
    { field: 'receipt_number', headerName: 'Receipt Number', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'id_code', headerName: 'ID Code', width: 200 },
    { field: 'supplier', headerName: 'Supplier', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 },
];

const rows = [
    { id: 1, receipt_number: '12345', date: '2025-03-01', id_code: 'A1B2C3', supplier: 'Supplier A', status: 'Paid' },
    { id: 2, receipt_number: '12346', date: '2025-03-02', id_code: 'D4E5F6', supplier: 'Supplier B', status: 'Unpaid' },
    { id: 3, receipt_number: '12347', date: '2025-03-03', id_code: 'G7H8I9', supplier: 'Supplier C', status: 'Paid' },
    { id: 4, receipt_number: '12348', date: '2025-03-04', id_code: 'J1K2L3', supplier: 'Supplier D', status: 'Pending' },
    { id: 5, receipt_number: '12349', date: '2025-03-05', id_code: 'M4N5O6', supplier: 'Supplier E', status: 'Paid' },
];

const Receive = () => {
    const onEdit = () => {
        console.log('edit');
    }

    const onDelete = () => {
        console.log('delete');
    }

    return (
        <div className="receive">
            <Tab>
                <TabSection title='Uncounted Items'>
                    <ReceiveTable 
                        columns={columns}
                        rows={rows}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        title={'32 Purchase Order this month'}
                    />
                </TabSection>
                <TabSection title='Counted Items'>
                    <ReceiveTable
                        columns={columns}
                        rows={rows}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        title={'500 Purchase Order this month'}
                    />
                </TabSection>
            </Tab>
        </div>
    )
}

export default Receive;
