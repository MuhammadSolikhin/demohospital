import React from 'react';
import Form from '../../../components/organisms/appointments/Form';
import { useTranslation } from 'react-i18next';

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));

const AppointmentCreatePage = () => {
    const { t } = useTranslation();

    return (
        <div className='appointment space-y-8'>
            <Breadcrumb
                title={t('overview.breadcrumb.create')}
                back='/appointments/overviews'
            />

            <Form />
        </div>
    )
}

export default AppointmentCreatePage;
