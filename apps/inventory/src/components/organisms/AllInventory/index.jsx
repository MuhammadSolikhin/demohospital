import React from 'react';
import AllInventoryTable from '../../molecules/Tables/InventoryTable/AllInventoryTable';
import { currency } from '../../../helpers/currency.helper';
import { useNavigate } from 'react-router-dom';

const Tab = React.lazy(() => import('components/Tab'));
const TabSection = React.lazy(() => import('components/TabSection'));
const TabAction = React.lazy(() => import('components/TabAction'));
const Button = React.lazy(() => import('components/Button'));

const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'id_code', headerName: 'ID Code', width: 200 },
    { field: 'available_stock', headerName: 'Available Stock', width: 200 },
    { field: 'unit', headerName: 'Unit', width: 200 },
    { field: 'category', headerName: 'Category', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'price', headerName: 'Unit Price (Rp)', width: 200 },
];

const rows = [
    {
        id: 1,
        name: 'Item A',
        id_code: 'A001',
        available_stock: 100,
        unit: 'pcs',
        category: 'Electronics',
        date: '2025-03-09',
        price: currency(5000),
    },
    {
        id: 2,
        name: 'Item B',
        id_code: 'B002',
        available_stock: 50,
        unit: 'pcs',
        category: 'Furniture',
        date: '2025-03-08',
        price: currency(500000),
    },
    {
        id: 3,
        name: 'Item C',
        id_code: 'C003',
        available_stock: 200,
        unit: 'kg',
        category: 'Food',
        date: '2025-03-07',
        price: currency(5000),
    },
    {
        id: 4,
        name: 'Item D',
        id_code: 'D004',
        available_stock: 300,
        unit: 'liter',
        category: 'Liquid',
        date: '2025-03-06',
        price: currency(25000),
    },
    {
        id: 5,
        name: 'Item E',
        id_code: 'E005',
        available_stock: 0,
        unit: 'pcs',
        category: 'Clothing',
        date: '2025-03-05',
        price: currency(120000),
    },
];
  

const AllInventory = () => {
    const navigate = useNavigate();

    const onEdit = () => {
        console.log('Edit Inventory Expired Items');
    }
    
    const onDelete = () => {
        console.log('Delete Inventory Expired Items');
    }
    
    return (
        <div className="inventory">
            <Tab>
                <TabAction>
                    <Button
                        onClick={() => navigate('/inventory/create')}
                        variant="none"
                        className="text-primary"
                        icon="gridicons:add"
                        label="Add Inventory"
                    />
                </TabAction>
                <TabSection title='Uncounted Items'>
                    <AllInventoryTable
                        title={'54 Inventory this month'}
                        rows={rows}
                        columns={columns}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </TabSection>
                <TabSection title='Counted Items'>
                    <AllInventoryTable
                        title={'523 Inventory this month'}
                        rows={rows}
                        columns={columns}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </TabSection>
            </Tab>
        </div>
    )
}

export default AllInventory;
