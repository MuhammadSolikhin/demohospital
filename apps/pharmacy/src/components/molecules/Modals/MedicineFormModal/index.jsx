import React from 'react';
import PropTypes from 'prop-types';
import MedicineForm from '../../Forms/MedicineForm';

const Modal = React.lazy(() => import('components/Modal'));

const MedicineFormModal = ({
    isOpen,
    onClose,
    onSubmit,
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
                onClickSubmit={onSubmit}
            />
        </Modal>
    )
}

MedicineFormModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func
};

export default MedicineFormModal;
