import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useForm } from "react-hook-form";
import PharmacyDetailMedicineTable from "../../molecules/Tables/PharmacyDetailMedicineTable";
import MedicineFormModal from "../../molecules/Modals/MedicineFormModal";
import MedicineCard from "../../molecules/Cards/MedicineCard";
import InsuranceCard from "../../molecules/Cards/InsuranceCard";
import PaymentCard from "../../molecules/Cards/PaymentCard";
import PharmacyInvoice from "../PharmacyInvoice";

const FormGroup = React.lazy(() => import('components/FormGroup'));
const Card = React.lazy(() => import('components/Card'));
const Input = React.lazy(() => import('components/Input'));
const Button = React.lazy(() => import('components/Button'));
const Checkbox = React.lazy(() => import('components/Checkbox'));

const PharmacyForm = ({
    currentStep = 1,
    setNextStep = () => null
}) => {
    const {
        // control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [medicineList, setMedicineList] = useState([]);
    const [medicineVerifiedList, setMedicineVerifiedList] = useState([]);
    const [isOpenAddMedicineModal, setIsOpenAddMedicineModal] = useState(false);
    const [isHaveInsurance, setIsHaveInsurance] = useState(false);

    const onFormSubmit = (data) => {
        setNextStep();
        console.log(data);
    }

    const onClickSaveAddMedicine = (medicine) => {
        setIsOpenAddMedicineModal(false);
        setMedicineList((prev) => [...prev, { ...medicine, quantity: 1, checked: false, id: crypto.randomUUID(), category: [{ id: crypto.randomUUID(), name: '100ml', selected: true }, { id: crypto.randomUUID(), name: '250ml', selected: false }] }]);
    }

    const onClickOpenAddMedicineModal = () => {
        setIsOpenAddMedicineModal(true);
    }

    const onClickCloseAddMedicineModal = () => {
        setIsOpenAddMedicineModal(false);
    }

    const onClickCheckboxListMedicine = (medicine) => {
        const checkMedicineVerified = medicineVerifiedList?.find((item) => item?.id == medicine?.id);
        if (checkMedicineVerified) {
            setMedicineList((prev) => prev.map((item) => item == medicine ? { ...item, checked: false } : item));
            return setMedicineVerifiedList((prev) => [
                ...prev,
                medicineVerifiedList?.filter((item) => item != medicine)
            ])
        }
        setMedicineList((prev) => prev.map((item) => item?.id == medicine?.id ? { ...item, checked: true } : item));
        return setMedicineVerifiedList((prev) => [...prev, {...medicine, checked: true}]);
    }

    const onChangeSearchMedicineList = (val) => {
        console.log(val);
    }

    return (
        <div className="form">
            {
                currentStep < 4 ? (
                    <>
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <div className="pharmacy-form">
                                <Card title='Input Medicine'>
                                    <div className="p-4 space-y-8">
                                        <FormGroup title='General'>
                                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                                <div className="col-span-1">
                                                    <Input
                                                        type='text'
                                                        label='Billing No.'
                                                        errors={errors}
                                                        register={register}
                                                        name='billing_number'
                                                        placeholder='Billing No.'
                                                    />
                                                </div>
                                                <div className="col-span-1">
                                                    <Input
                                                        type='text'
                                                        label='Case ID'
                                                        errors={errors}
                                                        register={register}
                                                        name='case_id'
                                                        placeholder='Case ID'
                                                    />
                                                </div>
                                                <div className="col-span-1">
                                                    <Input
                                                        type='date'
                                                        label='Date'
                                                        errors={errors}
                                                        register={register}
                                                        name='date'
                                                        placeholder='Date'
                                                    />
                                                </div>
                                                <div className="col-span-1">
                                                    <Input
                                                        type='text'
                                                        label='Doctor Name'
                                                        errors={errors}
                                                        register={register}
                                                        name='doctor_name'
                                                        placeholder='Doctor Name'
                                                    />
                                                </div>
                                                <div className="col-span-1">
                                                    <Input
                                                        type='text'
                                                        label='Patient Name'
                                                        errors={errors}
                                                        register={register}
                                                        name='patient_name'
                                                        placeholder='Patient Name'
                                                    />
                                                </div>
                                            </div>
                                        </FormGroup>
        
                                        <FormGroup title='Medicine'>
                                            <div className="flex items-center justify-end mb-4">
                                                <Button
                                                    variant='primary-outline'
                                                    label='Add'
                                                    icon="gridicons:add"
                                                    onClick={onClickOpenAddMedicineModal}
                                                />
                                            </div>
                                            <div className="medicine-lists space-y-4">
                                                <div className="lists">
                                                    <PharmacyDetailMedicineTable
                                                        onChangeCheckbox={onClickCheckboxListMedicine}
                                                        rows={medicineList}
                                                        currentStep={currentStep}
                                                    />
                                                </div>
        
                                                {
                                                    currentStep > 1 ? (
                                                        <div className="notes">
                                                            <Input
                                                                type='text'
                                                                placeholder='Notes'
                                                                label='Notes'
                                                                name='notes'
                                                                register={register}
                                                                errors={errors}
                                                            />
                                                        </div>
                                                    ) : (null)
                                                }
                                            </div>
                                        </FormGroup>
                                        
                                        {
                                            currentStep == 3 ? (
                                                <FormGroup title='More Detail' className='space-y-4'>
                                                    <Input
                                                        type='search'
                                                        placeholder='Search'
                                                        name='search'
                                                        onChange={onChangeSearchMedicineList}
                                                    />
                                                    <div className="medicine-lists space-y-4">
                                                        {
                                                            medicineVerifiedList?.map((medicineVerified, i) => {
                                                                return (
                                                                    <MedicineCard
                                                                        key={i}
                                                                        photo={medicineVerified?.photo}
                                                                        quantity={medicineVerified?.quantity}
                                                                        category={medicineVerified?.category}
                                                                        name={medicineVerified?.name}
                                                                    />
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </FormGroup>
                                            ) : (null)
                                        }
        
                                        {
                                            currentStep == 3 ? (
                                                <>
                                                    <div className="grid md:grid-cols-1 grid-cols-1">
                                                        <div className="col-span-1">
                                                            <Checkbox
                                                                label='Have Insurance'
                                                                className='p-4 bg-primary-light/10'
                                                                onChange={() => setIsHaveInsurance((prev) => !prev)}
                                                                checked={isHaveInsurance}
                                                            />
                                                            {
                                                                isHaveInsurance ? (
                                                                    <InsuranceCard
                                                                        medicines={medicineVerifiedList}
                                                                    />
                                                                ) : (null)
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="payments-section">
                                                        <PaymentCard />
                                                    </div>
                                                </>
                                            ) : (null)
                                        }
                                    </div>
                                    <div className="p-4 flex gap-2 justify-end">
                                        {
                                            currentStep == 3 ? (
                                                <Button
                                                    to='/pharmacy'
                                                    variant='primary-outline'
                                                    label='Cancel'
                                                />
                                            ) : (
                                                <Button
                                                    disabled={currentStep == 1}
                                                    type='button'
                                                    onClick={() => setNextStep(currentStep != 1 ? currentStep - 1 : 1)}
                                                    variant='primary-outline'
                                                    label='Prev'
                                                />
                                            )
                                        }
        
                                        <Button
                                            type='submit'
                                            variant='primary'
                                            label={currentStep == 3 ? 'Save' : 'Next'}
                                        />
                                    </div>
                                </Card>
                            </div>
                        </form>
        
                        <MedicineFormModal
                            isOpen={isOpenAddMedicineModal}
                            onClose={onClickCloseAddMedicineModal}
                            onSubmit={onClickSaveAddMedicine}
                        />
                    </>
                ) : (
                    <PharmacyInvoice />
                )
            }
        </div>
    )
}

PharmacyForm.propTypes = {
    currentStep: PropTypes.number,
    setNextStep: PropTypes.func
}

export default PharmacyForm;
