import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import _ from 'lodash'

const Icon = React.lazy(() => import('components/Icon'));
const Card = React.lazy(() => import('components/Card'));
const CardHeader = React.lazy(() => import('components/CardHeader'));
const CardBody = React.lazy(() => import('components/CardBody'));
const Typography = React.lazy(() => import('components/Typography'));
const Badge = React.lazy(() => import('components/Badge'));
const Dropdown = React.lazy(() => import('components/Dropdown'));
const UserProfile = React.lazy(() => import('components/UserProfile'));

const AppointmentCard = ({
    photo,
    title,
    status,
    onClickAction,
    purpose,
    doctor,
    time,
    longtime,
    patient,
}) => {
    const { t } = useTranslation();

    const badgeColor = {
        'approved': 'success',
        'on waiting': 'warning',
        'cancelled': 'danger',
    }

    return (
        <Card className='!shadow-none'>
            <CardHeader className='p-6 border-b'>
                <div className="flex items-center justify-between">
                    <Badge title={_.startCase(_.toLower(status))} variant={badgeColor[status.toLowerCase()]} />
                    <Dropdown
                        classNameLabel="!bg-transparent !border-none"
                        onClick={onClickAction}
                        options={[
                            {
                                label: t('overview.button.status.approve'),
                                value: 'approve'
                            },
                            {
                                label: t('overview.button.status.reschedule'),
                                value: 'reschedule'
                            },
                            {
                                label: t('overview.button.status.cancel'),
                                value: 'cancel'
                            }
                        ]}
                    >
                        <Icon name='solar:menu-dots-bold' />
                    </Dropdown>
                </div>
            </CardHeader>
            <CardBody className='px-8 py-4 space-y-4'>
                <div className="grid grid-cols-4 items-center">
                    <div className="col-span-3 space-y-4">
                        <div className="flex items-center gap-2">
                            <UserProfile className='h-12 w-12' photo={photo} />
                            <div className="appointment-detail">
                                <Typography variant='p' className='font-semibold'>{title}</Typography>
                                <Typography variant='small'>{doctor}</Typography>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex items-center justify-end gap-2">
                            <Icon name='mdi:clock-outline' size='16' />
                            <Typography variant='small' className='font-semibold text-end'>
                                {longtime}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="appointments-details space-y-2">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1 text-start">
                            <Typography className='text-secondary-dark'>Patient Name</Typography>
                        </div>
                        <div className="col-span-1 text-end">
                            <Typography>{patient?.name}</Typography>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 text-start">
                                <Typography className='text-secondary-dark'>Gender</Typography>
                            </div>
                            <div className="col-span-1 text-end">
                                <Typography>{patient?.gender}</Typography>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 text-start">
                                <Typography className='text-secondary-dark'>Purpose</Typography>
                            </div>
                            <div className="col-span-1 text-end">
                                <Typography>{purpose}</Typography>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 text-start">
                                <Typography className='text-secondary-dark'>Time</Typography>
                            </div>
                            <div className="col-span-1 text-end">
                                <Typography>{time}</Typography>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 text-start">
                                <Typography className='text-secondary-dark'>Phone Number</Typography>
                            </div>
                            <div className="col-span-1 text-end">
                                <Typography>{patient?.phone_number}</Typography>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 text-start">
                                <Typography className='text-secondary-dark'>Email</Typography>
                            </div>
                            <div className="col-span-1 text-end">
                                <Typography>{patient?.email}</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

AppointmentCard.propTypes = {
    photo: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
    onClickAction: PropTypes.func,
    purpose: PropTypes.string,
    doctor: PropTypes.string,
    time: PropTypes.string,
    longtime: PropTypes.string,
    patient: PropTypes.any,
}

export default AppointmentCard;
