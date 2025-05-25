import React from "react";
import Input from "../../../molecules/Input";
import Button from "../../../atoms/Button";
import { useTranslation } from "react-i18next";

const Card = React.lazy(() => import('components/Card'));
const CardBody = React.lazy(() => import('components/CardBody'));
const CardFooter = React.lazy(() => import('components/CardFooter'));
const Link = React.lazy(() => import('components/Link'));

const LoginForm = () => {
    const { t } = useTranslation();

    return (
        <form>
            <Card>
                <CardBody className='space-y-4'>
                    <Input
                        type={'email'}
                        label={t('login.input.email.label')}
                        placeholder={t('login.input.email.placeholder')}
                    />

                    <Input
                        type={'password'}
                        label={t('login.input.password.label')}
                        placeholder={t('login.input.password.placeholder')}
                    />
                </CardBody>
                <CardFooter className='!p-0 mt-8'>
                    <Button
                        variant='orange'
                        label={t('login.button.signin')}
                        className="mb-2"
                    />

                    <Link
                        to={'/auth/forgot-password'}
                        className={'underline'}
                    >
                        {
                            t('login.link.forgotPassword')
                        }
                    </Link>
                </CardFooter>
            </Card>
        </form>
    )
}

export default LoginForm;
