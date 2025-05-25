import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import Button from "../../../atoms/Button";
import React, { useState } from "react";

const Card = React.lazy(() => import('components/Card'));
const CardBody = React.lazy(() => import('components/CardBody'));
const CardFooter = React.lazy(() => import('components/CardFooter'));
const Link = React.lazy(() => import('components/Link'));

const OtpForm = ({
    length = 4,
    onSubmit,
}) => {
    const { t } = useTranslation();
    
    const [otp, setOtp] = useState(Array(length).fill(""));
    
    const handleChange = (value, index) => {
        if (!/^\d*$/.test(value)) return;

        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);

        if (value && index < length - 1) {
            console.log('add');
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-input-${index - 1}`);
            prevInput?.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(otp.join(""));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardBody className='space-y-4'>
                    <div className="grid grid-cols-4 gap-x-4">
                    {otp.map((digit, index) => (
                        <div className="col-span-1" key={index}>
                            <input
                                id={`otp-input-${index}`}
                                type="text"
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                maxLength="1"
                                className="w-full p-4 text-center text-2xl rounded-primary border border-primary shadow-md"
                            />
                        </div>
                    ))}
                    </div>
                </CardBody>
                <CardFooter className='!p-0 mt-8'>
                    <Button
                        type="submit"
                        variant='orange'
                        label={t('otp.button.confirm')}
                        className="mb-2"
                    />

                    <Link
                        to={'/'}
                        className={'underline'}
                    >
                        <span dangerouslySetInnerHTML={{ __html: t('otp.link.resend') }}></span>
                    </Link>
                </CardFooter>
            </Card>
        </form>
    )
}

OtpForm.propTypes = {
    length: PropTypes.number,
    onSubmit: PropTypes.func.isRequired,
}

export default OtpForm;
