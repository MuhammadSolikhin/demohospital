import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";

const Schedule = React.lazy(() => import('components/Schedule'));
const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Dropdown = React.lazy(() => import('components/Dropdown'));

const data = [
    {
        title: "Dr. Richard Simmons",
        date: "2024-12-29",
        started_at: "11:00",
        ended_at: "12:00",
        description: "Consultation for general health check-up"
    },
    {
        title: "Dr. Kamal Harris",
        date: "2024-12-30",
        started_at: "11:00",
        ended_at: "13:00",
        description: "Follow-up appointment for heart condition"
    },
    {
        title: "Dr. Wayne Roberts",
        date: "2024-12-31",
        started_at: "11:00",
        ended_at: "14:00",
        description: "Routine dental check-up"
    },
    {
        title: "Dr. Sylvia Green",
        date: "2025-01-02",
        started_at: "15:00",
        ended_at: "16:00",
        description: "Psychological counseling session"
    },
    {
        title: "Dr. Linda Clark",
        date: "2024-12-29",
        started_at: "08:00",
        ended_at: "10:00",
        description: "Consultation for skin issues"
    },
    {
        title: "Dr. Rina Patel",
        date: "2025-01-01",
        started_at: "10:30",
        ended_at: "11:30",
        description: "Pregnancy check-up"
    },
    {
        title: "Dr. Alvin Knight",
        date: "2024-12-30",
        started_at: "14:00",
        ended_at: "15:00",
        description: "Eye examination and vision test"
    },
    {
        title: "Dr. Emma Wilson",
        date: "2025-01-02",
        started_at: "16:30",
        ended_at: "18:00",
        description: "Follow-up for diabetes management"
    },
    {
        title: "Dr. Iqbal Ahmed",
        date: "2024-12-31",
        started_at: "18:30",
        ended_at: "19:30",
        description: "Consultation for respiratory issues"
    },
    {
        title: "Dr. Nora Williams",
        date: "2025-01-01",
        started_at: "20:00",
        ended_at: "21:00",
        description: "General health consultation"
    },
    {
        title: "Dr. Arif Khan",
        date: "2025-01-03",
        started_at: "07:00",
        ended_at: "08:00",
        description: "Routine check-up and medical consultation"
    },
    {
        title: "Dr. Zara Cooper",
        date: "2024-12-29",
        started_at: "08:00",
        ended_at: "09:00",
        description: "Appointment for childhood immunizations"
    },
    {
        title: "Dr. Robert James",
        date: "2024-12-30",
        started_at: "09:00",
        ended_at: "10:00",
        description: "Orthopedic consultation for joint pain"
    },
    {
        title: "Dr. Victor Hugo",
        date: "2025-01-02",
        started_at: "10:00",
        ended_at: "11:00",
        description: "Cardiology follow-up"
    },
    {
        title: "Dr. Amelia Brown",
        date: "2025-01-03",
        started_at: "13:00",
        ended_at: "14:30",
        description: "Nutrition consultation"
    },
    {
        title: "Dr. Harry Bell",
        date: "2025-01-01",
        started_at: "12:00",
        ended_at: "13:00",
        description: "Consultation for back pain"
    },
    {
        title: "Dr. Fiona Lake",
        date: "2024-12-31",
        started_at: "09:30",
        ended_at: "10:30",
        description: "Prenatal care check-up"
    },
    {
        title: "Dr. Michael Brooks",
        date: "2025-01-01",
        started_at: "17:00",
        ended_at: "18:00",
        description: "Sports injury consultation"
    },
    {
        title: "Dr. Michael Brooks",
        date: "2025-01-01",
        started_at: "17:00",
        ended_at: "18:00",
        description: "Sports injury consultation"
    },
    {
        title: "Dr. Michael Brooks",
        date: "2025-01-01",
        started_at: "17:00",
        ended_at: "18:00",
        description: "Sports injury consultation"
    },
    {
        title: "Dr. Michael Brooks",
        date: "2025-01-06",
        started_at: "17:00",
        ended_at: "18:00",
        description: "Sports injury consultation"
    },
    {
        title: "Dr. Michael Brooks",
        date: "2025-01-05",
        started_at: "17:00",
        ended_at: "18:00",
        description: "Sports injury consultation"
    },
    {
        title: "Dr. Michael Brooks",
        date: "2025-01-05",
        started_at: "17:00",
        ended_at: "18:00",
        description: "Sports injury consultation"
    },
    {
        title: "Dr. Michael Brooks",
        date: "2025-01-21",
        started_at: "17:00",
        ended_at: "18:00",
        description: "Sports injury consultation"
    },
];

const MonitorTemplate = () => {
    const { t } = useTranslation();

    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
    const [search, setSearch] = useState('');

    const onChangeDate = (date) => {
        setDate(date);
    }

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="appointment-monitoring space-y-4">
            <div className="flex items-center justify-between">
                <Breadcrumb title={t('monitor.title')} />
                <div className="filters flex items-center gap-x-2">
                    <Dropdown
                        label={'Doctor'}
                        options={[
                            {
                                label: 'Dr. Ade Rizki Wahyudi',
                                value: 1,
                            },
                            {
                                label: 'Dr. Grey Arlin',
                                value: 2,
                            },
                        ]}
                    />

                    <Dropdown
                        label={'Speciality'}
                        options={[
                            {
                                label: 'Speciality 1',
                                value: 1,
                            },
                            {
                                label: 'Speciality 2',
                                value: 2,
                            },
                        ]}
                    />
                </div>
            </div>

            <Schedule
                data={data}
                date={date}
                onChangeDate={onChangeDate}
                search={search}
                onChangeSearch={onChangeSearch}
            />
        </div>
    )
}

export default MonitorTemplate;
