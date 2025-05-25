import React from "react";
import { useTranslation } from "react-i18next";
import ResetPasswordForm from "../../organisms/form/reset-password/Index";
import Ilustration from "../../molecules/Ilustration";
const Brand = React.lazy(() => import('components/Brand'));
const Typography = React.lazy(() => import('components/Typography'));

const ResetPasswordTemplate = () => {
    const { t } = useTranslation();

    return (
        <div className="login min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 items-center justify-between min-h-screen p-28">
                <div className="col-span-1 space-y-8">
                    <Brand width={125} />
                    <div className="welcome space-y-2">
                        <Typography variant='h2'>{t('resetPassword.title')}</Typography>
                        <Typography variant='h4' className="!font-normal text-secondary-dark">{t('resetPassword.description')}</Typography>
                    </div>
                    <div className="login-form">
                        <ResetPasswordForm />
                    </div>
                </div>
                <div className="hidden md:block xl:block col-span-1 md:!col-span-2 xl:!col-span-2">
                    <Ilustration />
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordTemplate;
