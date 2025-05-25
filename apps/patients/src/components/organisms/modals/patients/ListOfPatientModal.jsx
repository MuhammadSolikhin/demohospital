import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const UserProfile = React.lazy(() => import('components/UserProfile'));
const Typography = React.lazy(() => import('components/Typography'));
const Button = React.lazy(() => import('components/Button'));
const Modal = React.lazy(() => import('components/Modal'));
const Input = React.lazy(() => import('components/Input'));

const ListOfPatientsModal = ({
    isOpen,
    onClose,
}) => {
    const { t } = useTranslation();

    return (
        <Modal
            title='List of Patients'
            isOpen={isOpen}
            onClose={onClose}
            footer={false}
        >
            <div className="space-y-4">
                <Input
                    type='search'
                    label={t('patients.form.input.name')}
                    placeholder={t('patients.form.input.name')}
                />

                <div className="list space-y-4">
                    <div className="grid grid-cols-6 items-center justify-between">
                        <div className="col-span-5 bg-secondary-light py-2 px-4">
                            <Typography className='!text-sm'>Name</Typography>
                        </div>
                        <div className="col-span-1 bg-secondary-light py-2 px-4">
                            <Typography className='!text-sm'>Total Visit</Typography>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 items-center justify-between">
                        <div className="profile col-span-5 flex items-center gap-2">
                            <UserProfile />
                            <div className="information">
                                <Typography variant='p' className='!text-sm'>Ade Rizki Wahyudi</Typography>
                                <Typography variant='small' className='!text-xs'>4123128312****</Typography>
                            </div>
                        </div>
                        <div className="col-span-1 text-center">
                            <Typography variant='p' className='!text-sm'>5 Visit</Typography>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 items-center justify-between">
                        <div className="profile col-span-5 flex items-center gap-2">
                            <UserProfile />
                            <div className="information">
                                <Typography variant='p' className='!text-sm'>Ade Rizki Wahyudi</Typography>
                                <Typography variant='small' className='!text-xs'>4123128312****</Typography>
                            </div>
                        </div>
                        <div className="col-span-1 text-center">
                            <Typography variant='p' className='!text-sm'>5 Visit</Typography>
                        </div>
                    </div>
                </div>

                <div className="footer pt-4 border-t border-secondary-light">
                    <div className="flex items-center justify-between">
                        <Button
                            variant='primary-outline'
                            icon='mynaui:arrow-left'
                        />
                        <div className="page !text-sm">
                            {t('patients.label.page')} <span className="font-semibold">1</span> {t('patients.label.of')} <span className="font-semibold">10</span>
                        </div>
                        <Button
                            variant='primary-outline'
                            icon='mynaui:arrow-right'
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

ListOfPatientsModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}

export default ListOfPatientsModal;
