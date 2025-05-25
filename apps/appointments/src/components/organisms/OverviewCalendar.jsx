import React from 'react';

const Calendar = React.lazy(() => import('components/Calendar'));

const OverviewCalendar = () => {
    return (
        <Calendar />
    )
}

export default OverviewCalendar;
