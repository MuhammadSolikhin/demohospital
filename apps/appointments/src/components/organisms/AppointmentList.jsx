import React from "react";
import AppointmentCard from "../molecules/AppointmentCard";
import { useTranslation } from "react-i18next";

const Typography = React.lazy(() => import('components/Typography'));

const appointments = [
    {
        title: 'Dentist Consultation',
        doctor: 'Dr. Ade Rizki Wahyudi',
        purpose: 'Consultation',
        status: 'Approved',
        time: '11.00 - 13.00 WIB',
        longtime: '2 Hours',
        patient: {
            name: 'Agus Santoso',
            gender: 'male',
            email: 'agus.santoso@mail.com',
            phone_number: '0876*******'
        }
    },
    {
        title: 'General Checkup',
        doctor: 'Dr. Ade Rizki Wahyudi',
        purpose: 'Routine Checkup',
        status: 'Cancelled',
        time: '09.00 - 10.00 WIB',
        longtime: '1 Hour',
        patient: {
            name: 'Siti Aminah',
            gender: 'female',
            email: 'siti.aminah@mail.com',
            phone_number: '0812*******'
        }
    },
    {
        title: 'Orthodontics Consultation',
        doctor: 'Dr. Ade Rizki Wahyudi',
        purpose: 'Braces Consultation',
        status: 'On Waiting',
        time: '14.00 - 15.30 WIB',
        longtime: '1.5 Hours',
        patient: {
            name: 'Budi Raharjo',
            gender: 'male',
            email: 'budi.raharjo@mail.com',
            phone_number: '0857*******'
        }
    }
];

const AppointmentList = () => {
    const { t } = useTranslation();

    const onClick = (value) => {
        console.log(value);
    }

    return (
        <div className="appointments space-y-4">
            <Typography variant='h4'>{t('overview.appointment')}</Typography>
            {
                appointments?.map((appointment, key) => {
                    return (
                        <AppointmentCard
                            key={key}
                            title={appointment?.title}
                            doctor={appointment?.doctor}
                            purpose={appointment?.purpose}
                            status={appointment?.status}
                            time={appointment?.time}
                            longtime={appointment?.longtime}
                            onClickAction={onClick}
                            patient={appointment?.patient}
                        />
                    )
                })
            }
        </div>
    )
}

export default AppointmentList;
