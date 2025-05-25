import React from 'react';
import PropTypes from 'prop-types';
import BirthPatientActivityLineChart from '../../charts/births/ActivityLineChart';

const Modal = React.lazy(() => import('components/Modal'));

const BirthActivityModal = ({
    title,
    isOpen,
    onClose,
}) => {
    return (
        <Modal
            title={title}
            isOpen={isOpen}
            onClose={onClose}
            submitText='Save'
            footer={false}
            className='!p-0'
        >
            <BirthPatientActivityLineChart />
        </Modal>
    )
}

BirthActivityModal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default BirthActivityModal;
