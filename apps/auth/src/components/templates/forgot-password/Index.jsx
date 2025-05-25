import React, { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import ForgotPasswordForm from "../../organisms/form/forgot-password/Index";
import Ilustration from "../../molecules/Ilustration";
import PropTypes from 'prop-types';
import OtpForm from "../../organisms/form/otp/Index";

const Brand = React.lazy(() => import('components/Brand'));
const Typography = React.lazy(() => import('components/Typography'));

const ForgotPasswordTemplate = () => {
    const { t } = useTranslation();
    const [processOTP, setProcessOTP] = useState(false);

    const onSubmit = () => {
        setProcessOTP(true);
    }

    const onSubmitOTP = () => {
        console.log('send');
    }

    return (
        <>
            {
                <div className="login min-h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 items-center justify-between min-h-screen p-28">
                        <div className="col-span-1 space-y-8">
                            <Brand width={125} />
                            <div className="welcome space-y-2">
                                <Typography variant='h2'>{t(processOTP ? 'otp.title' : 'forgotPassword.title')}</Typography>
                                <Typography variant='h4' className="!font-normal text-secondary-dark">{t(processOTP ? 'otp.description' : 'forgotPassword.description')}</Typography>
                            </div>
                            <div className="login-form">
                                {
                                    processOTP ? (
                                        <Suspense fallback={<>Loading</>}>
                                            <OtpForm 
                                                onSubmit={onSubmitOTP}
                                            />
                                        </Suspense>
                                    ) : (
                                        <ForgotPasswordForm
                                            onSubmit={onSubmit}
                                        />
                                    )
                                }
                            </div>
                        </div>
                        <div className="hidden md:block xl:block col-span-1 md:!col-span-2 xl:!col-span-2">
                            <Ilustration />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

ForgotPasswordTemplate.propTypes = {
    onSubmit: PropTypes.func
}

export default ForgotPasswordTemplate;
