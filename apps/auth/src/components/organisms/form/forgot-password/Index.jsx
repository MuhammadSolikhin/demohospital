import React from "react";
import Input from "../../../molecules/Input";
import Button from "../../../atoms/Button";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const Card = React.lazy(() => import('components/Card'));
const CardBody = React.lazy(() => import('components/CardBody'));
const CardFooter = React.lazy(() => import('components/CardFooter'));
const Link = React.lazy(() => import('components/Link'));

const ForgotPasswordForm = ({
    onSubmit
}) => {
    const { t } = useTranslation();

    return (
        <form onSubmit={onSubmit}>
            <Card>
                <CardBody className='space-y-4'>
                    <Input
                        type={'email'}
                        label={t('forgotPassword.input.email.label')}
                        placeholder={t('forgotPassword.input.email.placeholder')}
                    />
                </CardBody>
                <CardFooter className='!p-0 mt-8'>
                    <Button
                        type="submit"
                        variant='orange'
                        label={t('forgotPassword.button.send')}
                        className="mb-2"
                    />

                    <Link
                        to={'/'}
                        className={'underline'}
                    >
                        {
                            t('forgotPassword.link.login')
                        }
                    </Link>
                </CardFooter>
            </Card>
        </form>
    )
}

ForgotPasswordForm.propTypes = {
    onSubmit: PropTypes.func
}

export default ForgotPasswordForm;
