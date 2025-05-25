import React from 'react';
import PropTypes from 'prop-types';
import BirthPatientActivityLineChart from '../../charts/births/ActivityLineChart';

const Modal = React.lazy(() => import('components/Modal'));

const DeathActivityModal = ({
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

DeathActivityModal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default DeathActivityModal;
