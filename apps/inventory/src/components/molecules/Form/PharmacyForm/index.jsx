import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const FormGroup = React.lazy(() => import('components/FormGroup'));
const Input = React.lazy(() => import('components/Input'));
const Select = React.lazy(() => import('components/Select'));
const Button = React.lazy(() => import('components/Button'));

const productTypes = [];

const PharmacyForm = ({
    onClickCancel = () => null,
}) => {
    const { t } = useTranslation();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [items, setItems] = useState(Array.from({length: 1}, (_, i) => i));
    
    const onFormSubmit = (e) => {
        control.log(e);
    }

    const onClickAddItem = () => {
        setItems((prev) => [...prev, prev.length]);
    }

    const onClickRemoveItem = (index) => {
        setItems((prev) => prev.filter((i) => i !== index));
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className='space-y-8'>
            <FormGroup title='General Information' className="grid grid-cols-4 gap-4" id='general-information'>
                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='product_name'
                    placeholder={'Product Name'}
                    label={'Product Name'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='brand_name'
                    placeholder={'Brand Name'}
                    label={'Brand Name'}
                    errors={errors}
                />

                <Controller
                    name={`product_type`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Product Type'}
                            options={productTypes}
                            placeholder={'Product Type'}
                        />
                    )}
                />

                <Controller
                    name={`dosage_form`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Dosage Form'}
                            options={productTypes}
                            placeholder={'Dosage Form'}
                        />
                    )}
                />

                <Controller
                    name={`strength`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Strength'}
                            options={productTypes}
                            placeholder={'Strength'}
                        />
                    )}
                />

                <Controller
                    name={`unit`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Unit'}
                            options={productTypes}
                            placeholder={'Unit'}
                        />
                    )}
                />

                <Controller
                    name={`clasification`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Clasification'}
                            options={productTypes}
                            placeholder={'Clasification'}
                        />
                    )}
                />

                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='registartion_number'
                    placeholder={'Registration Number'}
                    label={'Registration Number'}
                    errors={errors}
                />

                <Controller
                    name={`supplier`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Supplier'}
                            options={productTypes}
                            placeholder={'Supplier'}
                        />
                    )}
                />

                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='location'
                    placeholder={'Location'}
                    label={'Location'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='date'
                    register={register}
                    name='po_date'
                    placeholder={'PO Date'}
                    label={'PO Date'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='date'
                    register={register}
                    name='expired_date'
                    placeholder={'Expire Date'}
                    label={'Expire Date'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='file'
                    register={register}
                    name='photo'
                    placeholder={'Photo'}
                    label={'Photo'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='color'
                    register={register}
                    name='product_code'
                    placeholder={'Product Code'}
                    label={'Product Code'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='pic'
                    placeholder={'PIC'}
                    label={'PIC'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='note'
                    placeholder={'Notes'}
                    label={'Notes'}
                    errors={errors}
                />

                <div className="col-span-4 space-y-8">
                    <div className="grid grid-cols-4 gap-4 justify-between items-end">
                        <Controller
                            name={`converter`}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    isRequired
                                    errors={errors}
                                    label={'Converter'}
                                    options={productTypes}
                                    placeholder={'Converter'}
                                />
                            )}
                        />

                        <Button
                            onClick={onClickAddItem}
                            variant="primary-outline"
                            className="col-end-5"
                            icon="gridicons:add"
                            label="Add New"
                        />
                    </div>

                    {
                        items?.map((index) => (
                            <div className="grid grid-cols-10 gap-4">
                                <div className="col-span-4 flex gap-4 items-center">
                                    {
                                        items.length > 1 ? (
                                            <Button
                                                icon="gridicons:trash"
                                                variant="none"
                                                onClick={() => onClickRemoveItem(index)}
                                                className="!p-0 !w-8 !h-8 !rounded-full text-red-500"
                                            />
                                        ) : (null)
                                    }
                                    <Input
                                        isRequired
                                        type='text'
                                        register={register}
                                        name={`item_name_${index}`}
                                        placeholder={'Item Name'}
                                        errors={errors}
                                    />
                                </div>

                                <Input
                                    isRequired
                                    type='number'
                                    register={register}
                                    name={`quantity_from_${index}`}
                                    placeholder={'1'}
                                    errors={errors}
                                    className='col-span-1'
                                />

                                <div className="col-span-2">
                                    <Controller
                                        name={`unit_quantity_from_${index}`}
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isRequired
                                                errors={errors}
                                                options={productTypes}
                                            />
                                        )}
                                    />
                                </div>

                                <Input
                                    isRequired
                                    type='number'
                                    register={register}
                                    name={`quantity_to_${index}`}
                                    placeholder={'1'}
                                    errors={errors}
                                    className='col-span-1'
                                />

                                <div className="col-span-2">
                                    <Controller
                                        name={`unit_quantity_to_${index}`}
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isRequired
                                                errors={errors}
                                                options={productTypes}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </FormGroup>

            <FormGroup title='Attributes' className="grid grid-cols-4 gap-4" id='attributes-and-variants'>
                <Controller
                    name={`flavor`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Flavor'}
                            options={productTypes}
                            placeholder={'Flavor'}
                        />
                    )}
                />

                <Controller
                    name={`color`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Color'}
                            options={productTypes}
                            placeholder={'Color'}
                        />
                    )}
                />

                <Controller
                    name={`size`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Size'}
                            options={productTypes}
                            placeholder={'Size'}
                        />
                    )}
                />
            </FormGroup>

            <FormGroup title='Variants' className="grid grid-cols-2 gap-4" id='attributes-and-variants'>
                <Controller
                    name={`strength_variants`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Strength Variants'}
                            options={productTypes}
                            placeholder={'Strength Variants'}
                        />
                    )}
                />

                <Controller
                    name={`packaging_variants`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Packaging Variants'}
                            options={productTypes}
                            placeholder={'Packaging Variants'}
                        />
                    )}
                />
            </FormGroup>

            <FormGroup title='Medicines Details' className="grid grid-cols-4 gap-4" id='medicine-details'>
                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='indication'
                    placeholder={'Indications'}
                    label={'Indications'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='contraindications'
                    placeholder={'Contraindications'}
                    label={'Contraindications'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='side_effect'
                    placeholder={'Side Effects'}
                    label={'Side Effects'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='medicine_interaction'
                    placeholder={'Medicine Interactions'}
                    label={'Medicine Interactions'}
                    errors={errors}
                />

                <div className="col-span-2">
                    <Input
                        isRequired
                        type='text'
                        register={register}
                        name='dosage_and_administration'
                        placeholder={'Dosage and Administration'}
                        label={'Dosage and Administration'}
                        errors={errors}
                    />
                </div>

                <div className="col-span-2">
                    <Input
                        isRequired
                        type='text'
                        register={register}
                        name='warnings_and_precautions'
                        placeholder={'Warnings and Precautions'}
                        label={'Warnings and Precautions'}
                        errors={errors}
                        className='col-span-2'
                    />
                </div>
            </FormGroup>

            <FormGroup title='Generic' className="grid grid-cols-2 gap-4" id='generic'>
                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='generic'
                    placeholder={'Generic Name'}
                    label={'Generic Name'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='composition'
                    placeholder={'Composition'}
                    label={'Composition'}
                    errors={errors}
                />
            </FormGroup>

            <FormGroup title='Sales' className="grid grid-cols-4 gap-4" id='sales'>
                <Input
                    isRequired
                    type='number'
                    register={register}
                    name='selling_price'
                    placeholder={'Selling Price'}
                    label={'Selling Price'}
                    errors={errors}
                    inputGroupText='Rp'
                />

                <Input
                    isRequired
                    type='number'
                    register={register}
                    name='discount'
                    placeholder={'Discount'}
                    label={'Discount'}
                    errors={errors}
                    inputGroupText='%'
                />

                <Input
                    isRequired
                    type='number'
                    register={register}
                    name='tax'
                    placeholder={'Tax'}
                    label={'Tax'}
                    errors={errors}
                    inputGroupText='%'
                />
            </FormGroup>

            <FormGroup title='Purchase' className="grid grid-cols-4 gap-4" id='purchase'>
                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='invoice'
                    placeholder={'Invoice'}
                    label={'Invoice'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='number'
                    register={register}
                    name='supplier_name'
                    placeholder={'Supplier Name'}
                    label={'Supplier Name'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='number'
                    register={register}
                    name='purchase_price'
                    placeholder={'Purchase Price'}
                    label={'Purchase Price'}
                    errors={errors}
                    inputGroupText='Rp'
                />

                <Input
                    isRequired
                    type='date'
                    register={register}
                    name='purchase_date'
                    placeholder={'Purchase Date'}
                    label={'Purchase Date'}
                    errors={errors}
                />

                <Controller
                    name={`purchase_unit`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Purchase Unit'}
                            options={productTypes}
                            placeholder={'Purchase Unit'}
                        />
                    )}
                />

                <Input
                    isRequired
                    type='number'
                    register={register}
                    name='quantity'
                    placeholder={'Purchase Quantity'}
                    label={'Purchase Quantity'}
                    errors={errors}
                />
            </FormGroup>

            <FormGroup title='Stock' className="grid grid-cols-4 gap-4" id='stock'>
                <Controller
                    name={`unit`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Stock Unit'}
                            options={productTypes}
                            placeholder={'Stock Unit'}
                        />
                    )}
                />

                <Input
                    isRequired
                    type='number'
                    register={register}
                    name='stock'
                    placeholder={'Stock Quantity'}
                    label={'Stock Quantity'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='number'
                    register={register}
                    name='stock_minimum'
                    placeholder={'Stock Minimum'}
                    label={'Stock Minimum'}
                    errors={errors}
                />

                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='storage_location'
                    placeholder={'Storage Location'}
                    label={'Storage Location'}
                    errors={errors}
                />
            </FormGroup>

            <FormGroup title='Accountancy' className="grid grid-cols-4 gap-4" id='accountancy'>
                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='accountancy_code'
                    placeholder={'Accountancy Code'}
                    label={'Accountancy Code'}
                    errors={errors}
                />

                <Controller
                    name={`cost_category`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            errors={errors}
                            label={'Cost Category'}
                            options={productTypes}
                            placeholder={'Cost Category'}
                        />
                    )}
                />

                <Input
                    isRequired
                    type='text'
                    register={register}
                    name='accounting_note'
                    placeholder={'Accounting Note'}
                    label={'Accounting Note'}
                    errors={errors}
                    inputGroupText='Rp'
                />
            </FormGroup>

            <div className='flex !p-0 !py-4 gap-2 items-center justify-end'>
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
            </div>
        </form>
    )
}

PharmacyForm.propTypes = {
    onClickCancel: PropTypes.func,
};

export default PharmacyForm;
