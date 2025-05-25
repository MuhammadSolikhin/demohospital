import React from 'react';
import PropTypes from 'prop-types';
import AddressForm from '../../Form/AddressForm';
import ListMedicineTable from '../../Tables/ListMedicineTable';

const Modal = React.lazy(() => import('components/Modal'));

const rows = [
    {
        id: 1,
        product_name: 'Paracetamol',
        brand_name: 'Panadol',
        product_type: 'Pill',
        input_date: '2022-01-01',
        expire_date: '2022-01-01',
        product_code: '123456',
        registartion_number: '123456',
    },
    {
        id: 2,
        product_name: 'Paracetamol',
        brand_name: 'Panadol',
        product_type: 'Pill',
        input_date: '2022-01-01',
        expire_date: '2022-01-01',
        product_code: '123456',
        registartion_number: '123456',
    },
    {
        id: 3,
        product_name: 'Paracetamol',
        brand_name: 'Panadol',
        product_type: 'Pill',
        input_date: '2022-01-01',
        expire_date: '2022-01-01',
        product_code: '123456',
        registartion_number: '123456',
    },
];

const ListMedicineModal = ({
    isOpen,
    onClose,
}) => {
    const columns = [
        { field: 'product_name', headerName: 'Product Name', width: 200 },
        { field: 'brand_name', headerName: 'Brand Name', width: 200 },
        { field: 'product_type', headerName: 'Product Type', width: 200 },
        { field: 'input_date', headerName: 'Input Date', width: 200 },
        { field: 'expire_date', headerName: 'Expire Date', width: 200 },
        { field: 'product_code', headerName: 'Product Code', width: 200 },
        { field: 'registartion_number', headerName: 'Registration Number', width: 200 },
    ];

    return (
        <Modal
            title='List Of Medicines'
            size='lg'
            isOpen={isOpen}
            onClose={onClose}
            footer={false}
            className='!p-0'
        >
            <ListMedicineTable
                columns={columns}
                rows={rows}
            />
        </Modal>
    )
}

ListMedicineModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default ListMedicineModal;
