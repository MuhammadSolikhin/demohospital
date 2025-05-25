import React from "react";
import { useTranslation } from 'react-i18next';

const LineChart = React.lazy(() => import('components/LineChart'));

const BirthPatientActivityLineChart = () => {
    const { t } = useTranslation();

    const datasets = [{label: 'User', data: [1,2,3,4,5,6,7]}];
    const labels = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

    const filterLables = [
        {
            label: t('birth.button.activity.today'),
            value: 'today',
        },
        {
            label: t('birth.button.activity.week'),
            value: 'today',
        },
        {
            label: t('birth.button.activity.month'),
            value: 'today',
        },
        {
            label: t('birth.button.activity.year'),
            value: 'year',
        }
    ];

    const onChangeFilter = (e) => {
        console.log(e.target.value);
    }

    return (
        <LineChart
            datasets={datasets}
            labels={labels}
            filters={filterLables}
            onChangeFilter={onChangeFilter}
            title={t('birth.label.activity')}
        />
    )
}

export default BirthPatientActivityLineChart;
