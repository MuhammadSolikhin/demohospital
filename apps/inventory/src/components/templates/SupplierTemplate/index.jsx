import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SupplierTable from '../../molecules/Tables/SupplierTable';
import SupplierFormModal from '../../molecules/Modals/SupplierFormModal';

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Button = React.lazy(() => import('components/Button'));

const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'contact', headerName: 'Contact', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'first_date_delivery', headerName: 'First Date Delivery', width: 200 },
];

const rows = [
    {
        id: 1,
        name: 'John Doe',
        contact: '123-456-7890',
        address: '123 Main St, Cityville',
        email: 'johndoe@example.com',
        first_date_delivery: '2024-07-01',
    },
    {
        id: 2,
        name: 'Jane Smith',
        contact: '987-654-3210',
        address: '456 Oak St, Townsville',
        email: 'janesmith@example.com',
        first_date_delivery: '2024-07-05',
    },
    {
        id: 3,
        name: 'Michael Johnson',
        contact: '555-123-4567',
        address: '789 Pine St, Villagetown',
        email: 'michaelj@example.com',
        first_date_delivery: '2024-07-10',
    },
    {
        id: 4,
        name: 'Emily Brown',
        contact: '111-222-3333',
        address: '321 Elm St, Metrocity',
        email: 'emilyb@example.com',
        first_date_delivery: '2024-07-15',
    },
    {
        id: 5,
        name: 'William Davis',
        contact: '444-555-6666',
        address: '654 Cedar St, Countryside',
        email: 'williamd@example.com',
        first_date_delivery: '2024-07-20',
    },
];

const SupplierTemplate = () => {
    const navigate = useNavigate();

    const [isSupplierFormModal, setIsSupplierFormModal] = useState(false);
    
    const onClickCloseSupplierFormModal = () => {
        setIsSupplierFormModal(false);
    }

    const onClickOpenSupplierFormModal = () => {
        setIsSupplierFormModal(true);
    }

    const onClickEdit = (params) => {
        return navigate(`/inventory/supplier/${params?.id}`);
    }

    const onClickDelete = () => {
        console.log('e')
    }

    return (
        <>
            <div className="report space-y-8">
                <div className="flex items-center justify-between">
                    <Breadcrumb title='Supplier' />
                    <Button
                        onClick={onClickOpenSupplierFormModal}
                        variant="none"
                        className="text-primary"
                        icon="gridicons:add"
                        label="Add Supplier"
                    />
                </div>
                
                <SupplierTable
                    title='54 Inventory this month'
                    rows={rows}
                    columns={columns}
                    onEdit={onClickEdit}
                    onDelete={onClickDelete}
                />
            </div>

            <SupplierFormModal
                isOpen={isSupplierFormModal}
                onClose={onClickCloseSupplierFormModal}
            />
        </>
    )
}

export default SupplierTemplate;
