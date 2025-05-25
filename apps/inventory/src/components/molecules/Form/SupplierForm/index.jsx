import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Card = React.lazy(() => import("components/Card"));
const CardBody = React.lazy(() => import('components/CardBody'));
const CardFooter = React.lazy(() => import('components/CardFooter'));
const Input = React.lazy(() => import('components/Input'));
const Button = React.lazy(() => import('components/Button'));

const SupplierForm = ({
    onClickCancel
}) => {
    const { t } = useTranslation();
    
    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onFormSubmit = (e) => {
        control.log(e);
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <Card>
                <CardBody className='space-y-4'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                        <div className="col-span-1">
                            <Input
                                tabIndex={1}
                                isRequired
                                type='text'
                                register={register}
                                name='name'
                                placeholder={'Supplier Name'}
                                label={'Supplier Name'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                tabIndex={1}
                                isRequired
                                type='text'
                                register={register}
                                name='address'
                                placeholder={'Address'}
                                label={'Address'}
                                errors={errors}
                            />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                        <div className="col-span-1">
                            <Input
                                tabIndex={1}
                                isRequired
                                type='email'
                                register={register}
                                name='email'
                                placeholder={'Email'}
                                label={'Email'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                tabIndex={1}
                                isRequired
                                type='date'
                                register={register}
                                name='delivery_date_start'
                                placeholder={'Delivery Date Start'}
                                label={'Delivery Date Start'}
                                errors={errors}
                            />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                        <div className="col-span-1">
                            <Input
                                tabIndex={1}
                                isRequired
                                type='text'
                                register={register}
                                name='contact'
                                placeholder={'Contact'}
                                label={'Contact'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                tabIndex={1}
                                isRequired
                                type='date'
                                register={register}
                                name='detail_address'
                                placeholder={'Detail Address'}
                                label={'Detail Address'}
                                errors={errors}
                            />
                        </div>
                    </div>
                </CardBody>
                
                <CardFooter className='flex !p-0 !py-4 gap-2 items-center justify-end'>
                    <Button
                        onClick={onClickCancel}
                        variant='primary-outline'
                        label={'Cancel'}
                    />

                    <Button
                        type='submit'
                        variant='primary'
                        label={'Save'}
                    />
                </CardFooter>
            </Card>
        </form>
    )
}

export default SupplierForm;
