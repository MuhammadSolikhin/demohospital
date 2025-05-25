import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const Card = React.lazy(() => import("components/Card"));
const CardBody = React.lazy(() => import('components/CardBody'));
const CardFooter = React.lazy(() => import('components/CardFooter'));
const Input = React.lazy(() => import('components/Input'));
const Button = React.lazy(() => import('components/Button'));
const Select = React.lazy(() => import('components/Select'));

const AddressForm = ({
    countries = [],
    provinces = [],
    cities = [],
    subdistricts = [],
    postalCodes = [],
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
                            <Controller
                                name={`country`}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isRequired
                                        errors={errors}
                                        label={'Country'}
                                        options={countries}
                                        placeholder={'Country'}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-span-1">
                            <Controller
                                name={`province`}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isRequired
                                        errors={errors}
                                        label={'Province'}
                                        options={provinces}
                                        placeholder={'Province'}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-span-1">
                            <Controller
                                name={`subdistrict`}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isRequired
                                        errors={errors}
                                        label={'Subdistrict'}
                                        options={subdistricts}
                                        placeholder={'Subdistrict'}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-span-1">
                            <Controller
                                name={`city`}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isRequired
                                        errors={errors}
                                        label={'City'}
                                        options={cities}
                                        placeholder={'City'}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-span-1">
                            <Controller
                                name={`postal_code`}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isRequired
                                        errors={errors}
                                        label={'Postal Code'}
                                        options={postalCodes}
                                        placeholder={'Postal Code'}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='text'
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

AddressForm.propTypes = {
    countries: PropTypes.array,
    provinces: PropTypes.array,
    cities: PropTypes.array,
    subdistricts: PropTypes.array,
    postalCodes: PropTypes.array,
    onClickCancel: PropTypes.func,
}

export default AddressForm;
