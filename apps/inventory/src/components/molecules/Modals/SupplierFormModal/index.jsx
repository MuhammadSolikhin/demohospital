import React from 'react';
import PropTypes from 'prop-types';
import SupplierForm from '../../Form/SupplierForm';

const Modal = React.lazy(() => import('components/Modal'));

const SupplierFormModal = ({
    isOpen,
    onClose,
}) => {
    return (
        <Modal
            title='Add Supplier'
            isOpen={isOpen}
            onClose={onClose}
            footer={false}
            className='!p-0'
        >
            <SupplierForm
                onClickCancel={onClose}
            />
        </Modal>
    )
}

SupplierFormModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default SupplierFormModal;
