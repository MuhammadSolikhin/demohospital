import React from 'react';
import { useTranslation } from 'react-i18next';

const DoctorCard = React.lazy(() => import('components/DoctorCard'));
const Typography = React.lazy(() => import('components/Typography'));

const DoctorList = () => {
    const { t } = useTranslation();

    return (
        <div className='space-y-4'>
            <Typography variant='h4'>{t('overview.doctors')}</Typography>

            <DoctorCard
                name={'Dr. Ade Rizki Wahyudi'}
                description={'Dentist'}
                totalAppointment={10}
            />
            
            <DoctorCard
                name={'Dr. Ade Rizki Wahyudi'}
                description={'Dentist'}
                totalAppointment={10}
            />

            <DoctorCard
                name={'Dr. Ade Rizki Wahyudi'}
                description={'Dentist'}
                totalAppointment={10}
            />
        </div>
    )
}

export default DoctorList;
