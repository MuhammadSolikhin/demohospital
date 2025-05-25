import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const Input = React.lazy(() => import('components/Input'));
const Select = React.lazy(() => import('components/Select'));
const Textarea = React.lazy(() => import('components/Textarea'));
const Button = React.lazy(() => import('components/Button'));

const visitTypeOptions = [
    {
        label: 'Consultation',
        value: 'consultation'
    },
    {
        label: 'Follow Up',
        value: 'follow_up'
    }
];

const doctorOptions = [
    {
        label: 'Dr. John Doe',
        value: 'john_doe'
    },
    {
        label: 'Dr. Jane Doe',
        value: 'jane_doe'
    },
    {
        label: 'Dr. John Smith',
        value: 'john_smith'
    }
];

const VisitForm = ({
    onClickCancel = () => null
}) => {
    const { t } = useTranslation();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onFormSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className='space-y-4'>
            <div className="form-group grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <Controller
                        name="visit_type"
                        control={control}
                        render={({ field }) => (
                            <Select
                                register={register}
                                {...field}
                                isRequired
                                errors={errors}
                                label={t('visits.form.input.visit_type')}
                                options={visitTypeOptions}
                                placeholder={t('visits.form.input.visit_type')}
                            />
                        )}
                    />
                </div>
                <div className="col-span-1">
                    <Input
                        isRequired
                        register={register}
                        label={t('visits.form.input.date_of_visit')}
                        placeholder={t('visits.form.input.date_of_visit')}
                        type='date'
                        name='date_of_visit'
                    />
                </div>
                <div className="col-span-1">
                    <Controller
                        name="doctor"
                        control={control}
                        render={({ field }) => (
                            <Select
                                register={register}
                                {...field}
                                isRequired
                                errors={errors}
                                label={t('visits.form.input.doctor')}
                                options={doctorOptions}
                                placeholder={t('visits.form.input.doctor')}
                            />
                        )}
                    />
                </div>
                <div className="col-span-1">
                    <Input
                        register={register}
                        label={t('visits.form.input.speciality')}
                        placeholder={t('visits.form.input.speciality')}
                        type='text'
                        name='speciality'
                    />
                </div>
                <div className="col-span-2">
                    <Textarea
                        label={t('visits.form.input.complaint')}
                        name='complaint'
                        register={register}
                        errors={errors}
                    />
                </div>
            </div>

            <div className="footer actions flex items-center justify-end gap-4">
                <Button
                    onClick={onClickCancel}
                    variant='secondary'
                    label={t('visits.form.button.cancel')}
                />

                <Button
                    variant='primary'
                    label={t('visits.form.button.save')}
                />
            </div>
        </form>
    )
}

VisitForm.propTypes = {
    onClickCancel: PropTypes.func,
}

export default VisitForm;
