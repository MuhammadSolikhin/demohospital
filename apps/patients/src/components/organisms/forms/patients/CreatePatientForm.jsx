import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Card = React.lazy(() => import("components/Card"));
const CardBody = React.lazy(() => import('components/CardBody'));
const CardFooter = React.lazy(() => import('components/CardFooter'));
const Input = React.lazy(() => import('components/Input'));
const Select = React.lazy(() => import('components/Select'));
const FormGroup = React.lazy(() => import('components/FormGroup'));
const Button = React.lazy(() => import('components/Button'));
const Textarea = React.lazy(() => import('components/Textarea'));

const nationalityOptions = [
    {
        value: 'indonesia',
        label: 'Indonesia'
    },
];

const provinceOptions = [
    {
        value: 'aceh',
        label: 'Aceh'
    },
    {
        value: 'bali',
        label: 'Bali'
    }
];

const cityOptions = [
    {
        value: 'denpasar',
        label: 'Denpasar'
    },
    {
        value: 'badung',
        label: 'Badung'
    }
];

const CreatePatientForm = () => {
    const { t } = useTranslation();
    
    const genderOptions = [
        {
            value: 'm',
            label: t('patients.form.input.options.gender.male')
        },
        {
            value: 'f',
            label: t('patients.form.input.options.gender.female')
        },
    ];

    const titleOptions = [
        {
            value: 'mr',
            label: t('patients.form.input.options.title.mr')
        },
        {
            value: 'mrs',
            label: t('patients.form.input.options.title.mrs')
        },
    ];

    const religionOptions = [
        {
            value: 'islam',
            label: t('patients.form.input.options.religion.Muslim')
        },
        {
            value: 'christian',
            label: t('patients.form.input.options.religion.christian')
        },
        {
            value: 'hindu',
            label: t('patients.form.input.options.religion.hindu')
        },
        {
            value: 'buddhist',
            label: t('patients.form.input.options.religion.buddhist')
        },
        {
            value: 'jewish',
            label: t('patients.form.input.options.religion.jewish')
        },
        {
            value: 'other',
            label: t('patients.form.input.options.religion.other')
        },
    ];

    const martialOptions = [
        {
            value: 'single',
            label: t('patients.form.input.options.martial_status.single')
        },
        {
            value: 'married',
            label: t('patients.form.input.options.martial_status.married')
        },
        {
            value: 'divorced',
            label: t('patients.form.input.options.martial_status.divorced')
        },
        {
            value: 'widowed',
            label: t('patients.form.input.options.martial_status.widowed')
        }
    ];

    const employmentOptions = [
        {
            value: 'full_time',
            label: t('patients.form.input.options.employment_status.full_time')
        },
        {
            value: 'part_time',
            label: t('patients.form.input.options.employment_status.part_time')
        },
        {
            value: 'self_employed',
            label: t('patients.form.input.options.employment_status.self_employed')
        },
        {
            value: 'unemployed',
            label: t('patients.form.input.options.employment_status.unemployed')
        },
        {
            value: 'student',
            label: t('patients.form.input.options.employment_status.student')
        },
        {
            value: 'retired',
            label: t('patients.form.input.options.employment_status.retired')
        },
        {
            value: 'other',
            label: t('patients.form.input.options.employment_status.other')
        }
    ];

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
                <CardBody className='p-8 space-y-10'>
                    {/* Patient Information Section */}
                    <FormGroup title={t('patients.form.label.patient_information')}>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                            <div className="col-span-1">
                                <Input
                                    tabIndex={1}
                                    isRequired
                                    type='number'
                                    register={register}
                                    name='identity_number'
                                    placeholder={t('patients.form.input.identity_number')}
                                    label={t('patients.form.input.identity_number')}
                                    errors={errors}
                                />
                            </div>

                            <div className="col-span-1">
                                <Controller
                                    name="title"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            tabIndex={2}
                                            isRequired
                                            errors={errors}
                                            label={t('patients.form.input.title')}
                                            options={titleOptions}
                                            placeholder={t('patients.form.input.title')}
                                        />
                                    )}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={3}
                                    isRequired
                                    register={register}
                                    name='dob'
                                    type='date'
                                    placeholder={t('patients.form.input.dob')}
                                    label={t('patients.form.input.dob')}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={4}
                                    isRequired
                                    register={register}
                                    name='first_name'
                                    placeholder={t('patients.form.input.first_name')}
                                    label={t('patients.form.input.first_name')}
                                    errors={errors}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={5}
                                    isRequired
                                    register={register}
                                    name='middle_name'
                                    placeholder={t('patients.form.input.middle_name')}
                                    label={t('patients.form.input.middle_name')}
                                    errors={errors}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={6}
                                    isRequired
                                    register={register}
                                    name='last_name'
                                    placeholder={t('patients.form.input.last_name')}
                                    label={t('patients.form.input.last_name')}
                                    errors={errors}
                                />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup title={t('patients.form.label.personal_detail')}>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                            <div className="col-span-1">
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            tabIndex={8}
                                            {...field}
                                            isRequired
                                            errors={errors}
                                            label={t('patients.form.input.gender')}
                                            options={genderOptions}
                                            placeholder={t('patients.form.input.gender')}
                                        />
                                    )}
                                />
                            </div>

                            <div className="col-span-1">
                                <Controller
                                    name="religion"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            tabIndex={9}
                                            {...field}
                                            errors={errors}
                                            label={t('patients.form.input.religion')}
                                            options={religionOptions}
                                            placeholder={t('patients.form.input.religion')}
                                        />
                                    )}
                                />
                            </div>

                            <div className="col-span-1">
                                <Controller
                                    name="martial_status"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            tabIndex={10}
                                            {...field}
                                            errors={errors}
                                            label={t('patients.form.input.martial_status')}
                                            options={martialOptions}
                                            placeholder={t('patients.form.input.martial_status')}
                                        />
                                    )}
                                />
                            </div>

                            <div className="col-span-1">
                                <Controller
                                    name="employment_status"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}  
                                            tabIndex={11}
                                            errors={errors}
                                            label={t('patients.form.input.employment_status')}
                                            options={employmentOptions}
                                            placeholder={t('patients.form.input.employment_status')}
                                        />
                                    )}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input  
                                    tabIndex={12}
                                    register={register}
                                    name='occupation'
                                    placeholder={t('patients.form.input.occupation')}
                                    label={t('patients.form.input.occupation')}
                                    errors={errors}
                                />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup title={t('patients.form.label.address')}>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                            <div className="col-span-3">
                                <Textarea
                                    tabIndex={13}
                                    register={register}
                                    name='address'
                                    placeholder={t('patients.form.input.address')}
                                    label={t('patients.form.input.address')}
                                    errors={errors}
                                />
                            </div>

                            <div className="col-span-1">
                                <Controller
                                    name="nationality"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            tabIndex={14}
                                            errors={errors}
                                            label={t('patients.form.input.nationality')}
                                            options={nationalityOptions}
                                            placeholder={t('patients.form.input.nationality')}
                                        />
                                    )}
                                />
                            </div>

                            <div className="col-span-1">
                                <Controller
                                    name="province"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            tabIndex={15}
                                            errors={errors}
                                            label={t('patients.form.input.province')}
                                            options={provinceOptions}
                                            placeholder={t('patients.form.input.province')}
                                        />
                                    )}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={16}
                                    register={register}
                                    name='postal_code'
                                    placeholder={t('patients.form.input.postal_code')}
                                    label={t('patients.form.input.postal_code')}
                                    errors={errors}
                                />
                            </div>
                        </div>
                    </FormGroup>

                    {/* Contact Information Section */}
                    <FormGroup title={t('patients.form.label.contact')}>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                            <div className="col-span-1">
                                <Input
                                    tabIndex={17}
                                    register={register}
                                    name='email'
                                    type='email'
                                    placeholder={t('patients.form.input.email')}
                                    label={t('patients.form.input.email')}
                                />
                            </div>
                            <div className="col-span-1">
                                <Input
                                    tabIndex={18}
                                    register={register}
                                    name='phone'
                                    type='text'
                                    placeholder={t('patients.form.input.phone')}
                                    label={t('patients.form.input.phone')}
                                />
                            </div>
                            <div className="col-span-1">
                                <Input
                                    tabIndex={19}
                                    register={register}
                                    name='telephone'
                                    type='text'
                                    placeholder={t('patients.form.input.telephone')}
                                    label={t('patients.form.input.telephone')}
                                />
                            </div>
                        </div>
                    </FormGroup>

                    {/* Emergency Contact Section */}
                    <FormGroup title={t('patients.form.label.emergency_contact')}>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                            <div className="col-span-1">
                                <Input
                                    tabIndex={20}
                                    register={register}
                                    name='emergency_contact_firstname'
                                    placeholder={t('patients.form.input.first_name')}
                                    label={t('patients.form.input.first_name')}
                                    errors={errors}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={21}
                                    register={register}
                                    name='emergency_contact_middlename'
                                    placeholder={t('patients.form.input.middle_name')}
                                    label={t('patients.form.input.middle_name')}
                                    errors={errors}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={22}
                                    register={register}
                                    name='emergency_contact_lastname'
                                    placeholder={t('patients.form.input.last_name')}
                                    label={t('patients.form.input.last_name')}
                                    errors={errors}
                                />
                            </div>

                            <div className="col-span-1">
                                <Controller
                                    name="emergency_contact_nationality"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            tabIndex={23}
                                            errors={errors}
                                            label={t('patients.form.input.nationality')}
                                            options={nationalityOptions}
                                            placeholder={t('patients.form.input.nationality')}
                                        />
                                    )}
                                />
                            </div>

                            <div className="col-span-1">
                                <Controller
                                    name="emergency_contact_province"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            tabIndex={24}
                                            errors={errors}
                                            label={t('patients.form.input.province')}
                                            options={provinceOptions}
                                            placeholder={t('patients.form.input.province')}
                                        />
                                    )}
                                />
                            </div>

                            <div className="col-span-1">
                                <Controller
                                    name="emergency_contact_city"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            tabIndex={25}
                                            errors={errors}
                                            label={t('patients.form.input.city')}
                                            options={cityOptions}
                                            placeholder={t('patients.form.input.city')}
                                        />
                                    )}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={26}
                                    register={register}
                                    name='emergency_contact_postal_code'
                                    placeholder={t('patients.form.input.postal_code')}
                                    label={t('patients.form.input.postal_code')}
                                    errors={errors}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={27}
                                    register={register}
                                    name='emergency_contact_phone'
                                    placeholder={t('patients.form.input.phone')}
                                    label={t('patients.form.input.phone')}
                                    errors={errors}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={28}
                                    register={register}
                                    name='emergency_contact_telephone'
                                    placeholder={t('patients.form.input.telephone')}
                                    label={t('patients.form.input.telephone')}
                                    errors={errors}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={29}
                                    register={register}
                                    name='emergency_contact_email'
                                    type='email'
                                    placeholder={t('patients.form.input.email')}
                                    label={t('patients.form.input.email')}
                                    errors={errors}
                                />
                            </div>

                            <div className="col-span-1">
                                <Controller
                                    name="emergenct_contact_religion"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            tabIndex={30}
                                            errors={errors}
                                            label={t('patients.form.input.religion')}
                                            options={religionOptions}
                                            placeholder={t('patients.form.input.religion')}
                                        />
                                    )}
                                />
                            </div>

                            <div className="col-span-3">
                                <Textarea
                                    tabIndex={31}
                                    register={register}
                                    name='emergency_contact_address'
                                    placeholder={t('patients.form.input.address')}
                                    label={t('patients.form.input.address')}
                                    errors={errors}
                                />
                            </div>
                        </div>
                    </FormGroup>

                    {/* Insurance Section */}
                    <FormGroup title={t('patients.form.label.insurance')}>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                            <div className="col-span-1">
                                <Input
                                    tabIndex={32}
                                    register={register}
                                    name='insurance_type'
                                    placeholder={t('patients.form.input.insurance_type')}
                                    label={t('patients.form.input.insurance_type')}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={33}
                                    register={register}
                                    name='insurance_number'
                                    placeholder={t('patients.form.input.insurance_number')}
                                    label={t('patients.form.input.insurance_number')}
                                />
                            </div>

                            <div className="col-span-1">
                                <Input
                                    tabIndex={34}
                                    register={register}
                                    name='insurance_name'
                                    placeholder={t('patients.form.input.insurance_name')}
                                    label={t('patients.form.input.insurance_name')}
                                />
                            </div>
                        </div>
                    </FormGroup>
                </CardBody>
                
                <CardFooter className='p-8 pt-0 flex gap-2 items-center justify-end'>
                    <Button
                        to={'/patients'}
                        variant='primary-outline'
                        label={t('patients.form.button.cancel')}
                    />

                    <Button
                        type='submit'
                        variant='primary'
                        label={t('patients.form.button.save')}
                    />
                </CardFooter>
            </Card>
        </form>
    )
}

export default CreatePatientForm;
