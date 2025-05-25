import React from 'react';
import { useTranslation } from 'react-i18next';

const Typography = React.lazy(() => import('components/Typography'))

const Flyer = () => {
    const { t } = useTranslation();

    return (
        <div className="flayer rounded-primary overflow-hidden">
            <div className="bg-gradient-to-r from-primary-blue to-primary">
                <div className="backgroud bg-[url('/assets/flyer.png')] bg-cover xl:bg-contain md:bg-contain bg-no-repeat w-full flex justify-end">
                    <div className="hello p-6 md:!p-8 xl:!p-12 text-white space-y-2">
                        <Typography variant='h4'>{ t('dashboard.welcome.hi', { name: "Susi Pujiastuti" }) }</Typography>
                        <Typography variant='h2'>{ t('dashboard.welcome.description') }</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Flyer;
