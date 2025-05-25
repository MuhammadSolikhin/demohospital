import React from 'react';
import PropTypes from 'prop-types';
import AddressForm from '../../Form/AddressForm';

const Modal = React.lazy(() => import('components/Modal'));

const countries = [
    { value: 'Indonesia', label: 'Indonesia' },
    { value: 'Malaysia', label: 'Malaysia' },
    { value: 'Singapore', label: 'Singapore' },
];

const provinces = [
    { value: 'Jawa Barat', label: 'Jawa Barat' },
    { value: 'Jawa Tengah', label: 'Jawa Tengah' },
    { value: 'Jawa Timur', label: 'Jawa Timur' },
];

const cities = [
    { value: 'Jakarta', label: 'Jakarta' },
    { value: 'Bandung', label: 'Bandung' },
    { value: 'Surabaya', label: 'Surabaya' },
];

const subdistricts = [
    { value: 'Kota Jakarta Utara', label: 'Kota Jakarta Utara' },
    { value: 'Kota Jakarta Selatan', label: 'Kota Jakarta Selatan' },
    { value: 'Kota Jakarta Timur', label: 'Kota Jakarta Timur' },
    { value: 'Kota Jakarta Barat', label: 'Kota Jakarta Barat' },
];

const postalCodes = [
    { value: '12345', label: '12345' },
    { value: '54321', label: '54321' },
];

const AddressFormModal = ({
    isOpen,
    onClose,
}) => {
    return (
        <Modal
            title='Add New Address'
            isOpen={isOpen}
            onClose={onClose}
            footer={false}
            className='!p-0'
        >
            <AddressForm    
                countries={countries}
                provinces={provinces}
                cities={cities}
                subdistricts={subdistricts}
                postalCodes={postalCodes}
                onClickCancel={onClose}
            />
        </Modal>
    )
}

AddressFormModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default AddressFormModal;
