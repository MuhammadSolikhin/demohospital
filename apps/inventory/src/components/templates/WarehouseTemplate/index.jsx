import React from 'react';
import WarehouseTable from "../../molecules/Tables/WarehouseTable";

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));

const columns = [
    { field: 'name', headerName: 'Warehouse Name', width: 200 },
    { field: 'code', headerName: 'Warehouse Code', width: 200 },
    { field: 'location', headerName: 'Location', width: 200 },
    { field: 'total_rack', headerName: 'Total Rack', width: 200 },
    { field: 'capacity_item', headerName: 'Capacity Item', width: 200 },
    { field: 'description', headerName: 'Description', width: 200 },
];

const rows = [
    {
        id: 1, // Unique identifier for the row
        name: 'Warehouse A',
        code: 'WA123',
        location: 'New York, USA',
        total_rack: 100,
        capacity_item: 5000,
        description: 'Main storage facility for electronics',
    },
    {
        id: 2,
        name: 'Warehouse B',
        code: 'WB456',
        location: 'Los Angeles, USA',
        total_rack: 80,
        capacity_item: 4000,
        description: 'Storage for office supplies and furniture',
    },
    {
        id: 3,
        name: 'Warehouse C',
        code: 'WC789',
        location: 'Chicago, USA',
        total_rack: 120,
        capacity_item: 6000,
        description: 'Cold storage for perishable goods',
    },
    {
        id: 4,
        name: 'Warehouse D',
        code: 'WD012',
        location: 'Miami, USA',
        total_rack: 60,
        capacity_item: 3000,
        description: 'General storage for clothing and textiles',
    },
    {
        id: 5,
        name: 'Warehouse E',
        code: 'WE345',
        location: 'San Francisco, USA',
        total_rack: 150,
        capacity_item: 7500,
        description: 'Large warehouse for industrial goods',
    },
];

const WarehouseTemplate = () => {
    const onEdit = () => {
        console.log('e')
    }

    const onDelete = () => {
        console.log('e')
    }

    return (
        <div className="report space-y-8">
            <div className="flex items-center justify-between">
                <Breadcrumb title='Warehouse' />
            </div>
            <WarehouseTable
                title='54 Inventory this month'
                rows={rows}
                columns={columns}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </div>
    )
}

export default WarehouseTemplate;
