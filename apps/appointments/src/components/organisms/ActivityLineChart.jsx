import React from "react";
import { useTranslation } from 'react-i18next';

const LineChart = React.lazy(() => import('components/LineChart'));

const ActivityLineChart = () => {
    const { t } = useTranslation();

    const datasets = [{label: 'User', data: [1,2,3,4,5]}];
    const labels = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

    const filterLables = [
        {
            label: t('overview.button.activity.today'),
            value: 'today',
        },
        {
            label: t('overview.button.activity.week'),
            value: 'today',
        },
        {
            label: t('overview.button.activity.month'),
            value: 'today',
        },
        {
            label: t('overview.button.activity.year'),
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
            title={t('overview.activity')}
        />
    )
}

export default ActivityLineChart;
