import React from 'react';
import PropTypes from 'prop-types';
import MedicineForm from '../../Form/MedicineForm';

const Modal = React.lazy(() => import('components/Modal'));

const MedicineFormModal = ({
    isOpen,
    onClose,
}) => {
    return (
        <Modal
            title='Add New Medicine'
            size='lg'
            isOpen={isOpen}
            onClose={onClose}
            footer={false}
            className='!p-0'
        >
            <MedicineForm
                onClickCancel={onClose}
            />
        </Modal>
    )
}

MedicineFormModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default MedicineFormModal;
