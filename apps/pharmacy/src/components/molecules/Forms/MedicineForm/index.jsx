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

const medicineTypes = [];

const MedicineForm = ({
    onClickCancel,
    onClickSubmit = null,
}) => {
    const { t } = useTranslation();
    
    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onFormSubmit = (data) => {
        onClickSubmit(data);
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <Card>
                <CardBody className='space-y-4'>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='text'
                                register={register}
                                name='medicine_name'
                                placeholder={'Medicine Name'}
                                label={'Medicine Name'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='text'
                                register={register}
                                name='medicine_brand'
                                placeholder={'Medicine Brand'}
                                label={'Medicine Brand'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type='text'
                                register={register}
                                name='description'
                                placeholder={'Description'}
                                label={'Description'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Controller
                                name={`medicine_type`}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        errors={errors}
                                        label={'Medicine Type'}
                                        options={medicineTypes}
                                        placeholder={'Medicine Type'}
                                    />
                                )}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type='text'
                                register={register}
                                name='instruction'
                                placeholder={'Instruction'}
                                label={'Instruction'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type='text'
                                register={register}
                                name='frequency'
                                placeholder={'Frequency'}
                                label={'Frequency'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type='text'
                                register={register}
                                name='food_relation'
                                placeholder={'Food Relation'}
                                label={'Food Relation'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type='text'
                                register={register}
                                name='route'
                                placeholder={'Route'}
                                label={'Route'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type='text'
                                register={register}
                                name='dosage'
                                placeholder={'Dosage'}
                                label={'Dosage'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type='text'
                                register={register}
                                name='no_off_day'
                                placeholder={'No Off Day'}
                                label={'No Off Day'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type='text'
                                register={register}
                                name='type_no_off_day'
                                placeholder={'Type No Off Day'}
                                label={'Type No Off Day'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='date'
                                register={register}
                                name='expire_date'
                                placeholder={'Expire Date'}
                                label={'Expire Date'}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='number'
                                register={register}
                                name='price'
                                placeholder={'Price'}
                                label={'Price'}
                                inputGroupText='Rp'
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='number'
                                register={register}
                                name='amount'
                                placeholder={'Amount'}
                                label={'Amount'}
                                inputGroupText='Rp'
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                isRequired
                                type='number'
                                register={register}
                                name='total_amount'
                                placeholder={'Total Amount'}
                                label={'Total Amount'}
                                inputGroupText='Rp'
                                errors={errors}
                            />
                        </div>
                    </div>
                </CardBody>
                
                <CardFooter className='flex !p-0 !py-4 gap-2 items-center justify-end w-full'>
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

MedicineForm.propTypes = {
    countries: PropTypes.array,
    provinces: PropTypes.array,
    cities: PropTypes.array,
    subdistricts: PropTypes.array,
    postalCodes: PropTypes.array,
    onClickCancel: PropTypes.func,
    onClickSubmit: PropTypes.func,
}

export default MedicineForm;
