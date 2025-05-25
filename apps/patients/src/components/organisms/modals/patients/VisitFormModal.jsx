import React from 'react';
import PropTypes from 'prop-types';
import VisitForm from '../../forms/visits/Index';

const Modal = React.lazy(() => import('components/Modal'));

const VisitFormModal = ({
    isOpen,
    onClose,
}) => {
    return (
        <Modal
            title='Add Visit'
            isOpen={isOpen}
            onClose={onClose}
            submitText='Save'
            footer={false}
            className='!p-0'
        >
            <VisitForm
                onClickCancel={onClose}
            />
        </Modal>
    )
}

VisitFormModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default VisitFormModal;
