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

const AssetForm = ({
    onClickCancel,
    suppliers = [],
    categories = [],
    pics = [],
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
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='text'
                                register={register}
                                name='item_name'
                                placeholder={'Item Name'}
                                label={'Item Name'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Controller
                                name={`supplier`}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isRequired
                                        errors={errors}
                                        label={'Supplier'}
                                        options={suppliers}
                                        placeholder={'Supplier'}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-span-1">
                            <Controller
                                name={`category`}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isRequired
                                        errors={errors}
                                        label={'Category'}
                                        options={categories}
                                        placeholder={'Category'}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='text'
                                register={register}
                                name='location'
                                placeholder={'Location'}
                                label={'Location'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='date'
                                register={register}
                                name='po_date'
                                placeholder={'PO Date'}
                                label={'PO Date'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='text'
                                register={register}
                                name='condition'
                                placeholder={'Condition'}
                                label={'Condition'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Controller
                                name={`pic`}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isRequired
                                        errors={errors}
                                        label={'PIC'}
                                        options={pics}
                                        placeholder={'PIC'}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='text'
                                register={register}
                                name='notes'
                                placeholder={'Notes'}
                                label={'Notes'}
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

AssetForm.propTypes = {
    countries: PropTypes.array,
    provinces: PropTypes.array,
    cities: PropTypes.array,
    subdistricts: PropTypes.array,
    postalCodes: PropTypes.array,
    onClickCancel: PropTypes.func,
}

export default AssetForm;
