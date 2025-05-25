import React from "react";
import { useForm, Controller } from "react-hook-form";
import Toast from "components/Toast";
import Alert from "components/Alert";
import { useTranslation } from "react-i18next";

const Card = React.lazy(() => import('components/Card'));
const CardBody = React.lazy(() => import('components/CardBody'));
const CardFooter = React.lazy(() => import('components/CardFooter'));
const Input = React.lazy(() => import('components/Input'));
const Select = React.lazy(() => import('components/Select'));
const Button = React.lazy(() => import('components/Button'));
const Typography = React.lazy(() => import('components/Typography'));

const doctors = [
    {
        value: '1',
        label: 'Dr. Ade'
    },
    {
        value: '2',
        label: 'Dr. Rizki'
    },
    {
        value: '3',
        label: 'Dr. Wahyudi'
    },
]

const Form = () => {
    const { t } = useTranslation();

    const genderOptions = [
        {
            value: 'm',
            label: t('overview.form.appointment.input.options.gender.male')
        },
        {
            value: 'f',
            label: t('overview.form.appointment.input.options.gender.female')
        },
    ];
    
    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onFormSubmit = (e) => {
        console.log(e);
        Alert.success('Successfully to create new data');
        return Toast.success('Successfully to create new data');
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <Card>
                <CardBody className='p-8 space-y-10'>
                    <div className="form-patient-information space-y-4">
                        <Typography variant='h4' className='border-b pb-2 border-gray-400'>
                            { t('overview.form.appointment.input.patient_information_title') }
                        </Typography>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                            <div className="col-span-1">
                                <Input
                                    isRequired
                                    register={register}
                                    name='patient_name'
                                    placeholder={t('overview.form.appointment.input.patient_name')}
                                    label={t('overview.form.appointment.input.patient_name')}
                                    errors={errors}
                                />
                            </div>
                            <div className="col-span-1">
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isRequired
                                            errors={errors}
                                            label={t('overview.form.appointment.input.gender')}
                                            options={genderOptions}
                                            placeholder={t('overview.form.appointment.input.gender')}
                                        />
                                    )}
                                />
                            </div>
                            <div className="col-span-1">
                                <Input
                                    isRequired
                                    register={register}
                                    name='dob'
                                    type='date'
                                    placeholder={t('overview.form.appointment.input.dob')}
                                    label={t('overview.form.appointment.input.dob')}
                                />
                            </div>
                            <div className="col-span-1">
                                <Input
                                    isRequired
                                    register={register}
                                    name='email'
                                    type='email'
                                    placeholder={t('overview.form.appointment.input.email')}
                                    label={t('overview.form.appointment.input.email')}
                                />
                            </div>
                            <div className="col-span-1">
                                <Input
                                    isRequired
                                    register={register}
                                    name='handphone_number'
                                    type='number'
                                    placeholder={t('overview.form.appointment.input.phone')}
                                    label={t('overview.form.appointment.input.phone')}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-more-information space-y-4">
                        <Typography variant='h4' className='border-b pb-2 border-gray-400'>
                            { t('overview.form.appointment.input.appointment_detail_title') }
                        </Typography>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                            <div className="col-span-1">
                                <Input
                                    isRequired
                                    register={register}
                                    name='purpose'
                                    placeholder={t('overview.form.appointment.input.purpose')}
                                    label={t('overview.form.appointment.input.purpose')}
                                />
                            </div>
                            <div className="col-span-1">
                                <Controller
                                    name="doctor"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isRequired
                                            name='doctor'
                                            label={t('overview.form.appointment.input.doctor')}
                                            options={doctors}
                                        />
                                    )}
                                />
                            </div>
                            <div className="col-span-1">
                                <Input
                                    isRequired
                                    register={register}
                                    name='date'
                                    type='date'
                                    placeholder='date'
                                    label={t('overview.form.appointment.input.date')}
                                />
                            </div>
                            <div className="col-span-1">
                                <Input
                                    isRequired
                                    register={register}
                                    name='time'
                                    type='time'
                                    placeholder='time'
                                    label={t('overview.form.appointment.input.time')}
                                />
                            </div>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className='p-8 pt-0 flex gap-2 items-center justify-end'>
                    <Button
                        to={'/appointments/overviews'}
                        variant='primary-outline'
                        label={t('overview.form.appointment.button.cancel')}
                    />

                    <Button
                        type='submit'
                        variant='primary'
                        label={t('overview.form.appointment.button.save')}
                    />
                </CardFooter>
            </Card>
        </form>
    )
}

export default Form;
