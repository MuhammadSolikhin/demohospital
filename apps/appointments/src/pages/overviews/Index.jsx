import React from "react";
import { useNavigate } from "react-router-dom";
import ActivityLineChart from "../../components/organisms/ActivityLineChart";
import DoctorList from "../../components/organisms/DoctorList";
import OverviewCalendar from "../../components/organisms/OverviewCalendar";
import AppointmentList from "../../components/organisms/AppointmentList";
import { useTranslation } from "react-i18next";
import env from '../../helpers/env.helper';

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Dropdown = React.lazy(() => import('components/Dropdown'));

const AppointmentOverviewPage = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const onClickAddAppointment = (value) => {
        const url = value === 'form'
            ? '/appointments/create'
            : '/appointments/guest/create';

        return navigate(url);
    }

    return (
        <div className="appoitments space-y-4">
            <div className="appointment-header xl:flex md:flex block xl:space-y-0 md:space-y-0 space-y-2 items-center justify-between">
                <Breadcrumb title={t('overview.title')} />
                <Dropdown
                    label={t('overview.button.add.title')}
                    onClick={onClickAddAppointment}
                    options={[
                        {
                            label: t('overview.button.add.form'),
                            value: 'form'
                        },
                        {
                            label: t('overview.button.add.link'),
                            value: 'link'
                        },
                    ]}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1 xl:col-span-1 space-y-4">
                    <ActivityLineChart />
                    <DoctorList />
                </div>
                <div className="col-span-2 lg:col-span-1 xl:col-span-1 space-y-4">
                    <OverviewCalendar />
                    <AppointmentList />
                </div>
            </div>
        </div>
    )
}

export default AppointmentOverviewPage;
