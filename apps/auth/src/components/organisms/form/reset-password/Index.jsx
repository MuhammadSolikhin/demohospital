import React from "react";
import Input from "../../../molecules/Input";
import Button from "../../../atoms/Button";
import { useTranslation } from "react-i18next";

const Card = React.lazy(() => import('components/Card'));
const CardBody = React.lazy(() => import('components/CardBody'));
const CardFooter = React.lazy(() => import('components/CardFooter'));
const Link = React.lazy(() => import('components/Link'));

const ResetPasswordForm = () => {
    const { t } = useTranslation();

    return (
        <form>
            <Card>
                <CardBody className='space-y-4'>
                    <Input
                        type={'password'}
                        label={t('resetPassword.input.password.label')}
                        placeholder={t('resetPassword.input.password.placeholder')}
                    />

                    <Input
                        type={'password'}
                        label={t('resetPassword.input.confirmationPassword.label')}
                        placeholder={t('resetPassword.input.confirmationPassword.placeholder')}
                    />
                </CardBody>
                <CardFooter className='!p-0 mt-8'>
                    <Button
                        variant='orange'
                        label={t('resetPassword.button.reset')}
                        className="mb-2"
                    />

                    <Link
                        to={'/'}
                        className={'underline'}
                    >
                        {
                            t('resetPassword.link.login')
                        }
                    </Link>
                </CardFooter>
            </Card>
        </form>
    )
}

export default ResetPasswordForm;
