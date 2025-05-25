import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import AddressPurchaseOrderModal from '../../../molecules/Modals/AddressPurchaseOrderModal';

const Card = React.lazy(() => import("components/Card"));
const CardBody = React.lazy(() => import('components/CardBody'));
const CardFooter = React.lazy(() => import('components/CardFooter'));
const Input = React.lazy(() => import('components/Input'));
const Button = React.lazy(() => import('components/Button'));
const FormGroup = React.lazy(() => import('components/FormGroup'));
const Select = React.lazy(() => import('components/Select'));

const unitOptions = [
    { value: 'pcs', label: 'Pcs' },
    { value: 'box', label: 'Box' },
];

const addressOptions = [
    { value: 'address1', label: 'Address 1' },
    { value: 'address2', label: 'Address 2' },
    { value: 'address3', label: 'Address 3' },
    { value: 'address4', label: 'Address 4' },
    { value: 'address5', label: 'Address 5' },
    { value: 'address6', label: 'Address 6' },
];

const PurchaseOrderForm = ({
    onClickCancel
}) => {
    const { t } = useTranslation();

    const [inputItemPurchaseOrder, setInputItemPurchaseOrder] = React.useState(Array.from({ length: 1 }, (_, i) => i));
    const [isOpenAddressModal, setIsOpenAddressModal] = React.useState(false);
    const [isLoading, isSetLoading] = React.useState(false);

    const {
        control,
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm();
    
    const onFormSubmit = (e) => {
        control.log(e);
    }

    const onClickAddItemPurchaseOrder = () => {
        setInputItemPurchaseOrder((prev) => [...prev, prev.length]);
    }

    const onCloseAddressModal = () => {
        setIsOpenAddressModal(false);
    }

    const onClickOpenAddressModal = () => {
        if (!isOpenAddressModal) {
            setIsOpenAddressModal(true);
        }
    }

    const onClickSelectAddress = (value) => {
        setValue('address', value);
        setIsOpenAddressModal(false);
    }
    

    return (
        <>
            <AddressPurchaseOrderModal 
                addresses={addressOptions}
                isLoading={isLoading}
                isOpen={isOpenAddressModal}
                onClose={onCloseAddressModal}
                onSelect={onClickSelectAddress}
            />
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <Card className='p-8'>
                    <CardBody className='space-y-4'>
                        <FormGroup title='Information'>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                <div className="col-span-1">
                                    <Input
                                        tabIndex={1}
                                        isRequired
                                        type='text'
                                        register={register}
                                        name='supplier'
                                        placeholder={'Supplier'}
                                        label={'Supplier'}
                                        errors={errors}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <Input
                                        tabIndex={1}
                                        isRequired
                                        type='date'
                                        register={register}
                                        name='date_of_po'
                                        placeholder={'Date of PO'}
                                        label={'Date of PO'}
                                        errors={errors}
                                    />
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                <div className="col-span-1">
                                    <Input
                                        tabIndex={1}
                                        isRequired
                                        type='date'
                                        register={register}
                                        name='date_of_delivery'
                                        placeholder={'Date of Delivery'}
                                        label={'Date of Delivery'}
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
                                        onFocus={onClickOpenAddressModal}
                                    />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup title='Items Purchase Order'>
                            {
                                inputItemPurchaseOrder.map((_, index) => {
                                    return (
                                        <div className='grid md:grid-cols-5 grid-cols-1 gap-4'>
                                            <div className="col-span-1">
                                                <Input
                                                    tabIndex={1}
                                                    isRequired
                                                    type='text'
                                                    register={register}
                                                    name={`item_name_${index}`}
                                                    placeholder={'Item Name'}
                                                    label={'Item Name'}
                                                    errors={errors}
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <Input
                                                    tabIndex={1}
                                                    isRequired
                                                    type='number'
                                                    register={register}
                                                    name={`quantity_${index}`}
                                                    placeholder={'Quantity'}
                                                    label={'Quantity'}
                                                    errors={errors}
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <Controller
                                                    name={`unit_${index}`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Select
                                                            {...field}
                                                            isRequired
                                                            errors={errors}
                                                            label={'Unit'}
                                                            options={unitOptions}
                                                            placeholder={'Unit'}
                                                        />
                                                    )}
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <Input
                                                    tabIndex={1}
                                                    isRequired
                                                    type='number'
                                                    register={register}
                                                    name={`price_per_unit_${index}`}
                                                    placeholder={'Price per Unit'}
                                                    label={'Price per Unit'}
                                                    errors={errors}
                                                    inputGroupText='Rp'
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <Input
                                                    tabIndex={1}
                                                    isRequired
                                                    type='number'
                                                    register={register}
                                                    name={`total_price_${index}`}
                                                    placeholder={'Total Price'}
                                                    label={'Total Price'}
                                                    errors={errors}
                                                    inputGroupText='Rp'
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <Button
                                onClick={onClickAddItemPurchaseOrder}
                                variant="none"
                                className="text-primary !px-0"
                                icon="gridicons:add"
                                label="Add New Item"
                            />
                        </FormGroup>
                        <FormGroup title='Total'>
                            <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                                <div className="col-span-1">
                                    <Input
                                        tabIndex={1}
                                        isRequired
                                        type='number'
                                        register={register}
                                        name='tax'
                                        placeholder={'Tax'}
                                        label={'Tax'}
                                        errors={errors}
                                        inputGroupText='Rp'
                                    />
                                </div>
                                <div className="col-span-1">
                                    <Input
                                        tabIndex={1}
                                        isRequired
                                        type='number'
                                        register={register}
                                        name='discount'
                                        placeholder={'Discount'}
                                        label={'Discount'}
                                        errors={errors}
                                        inputGroupText='Rp'
                                    />
                                </div>
                                <div className="col-span-1">
                                    <Input
                                        tabIndex={1}
                                        isRequired
                                        type='number'
                                        register={register}
                                        name='total_po'
                                        placeholder={'Total Purchase Order (PO)'}
                                        label={'Total Purchase Order (PO)'}
                                        errors={errors}
                                        inputGroupText='Rp'
                                    />
                                </div>
                            </div>
                        </FormGroup>
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
        </>
    )
}

export default PurchaseOrderForm;
