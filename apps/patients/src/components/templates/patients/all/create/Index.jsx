import React from "react";
import CreatePatientForm from "../../../../organisms/forms/patients/CreatePatientForm";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ListOfPatientsModal from "../../../../organisms/modals/patients/ListOfPatientModal";
import { useTranslation } from "react-i18next";

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Button = React.lazy(() => import('components/Button'));
const Input = React.lazy(() => import('components/Input'));

const CreatePatientTemplate = () => {
    const navigate = useNavigate();

    const { t } = useTranslation();
    
    const [registrationNumber, setRegistrationNumber] = useState(null);
    const [isListPatientModal, setIsListPatientModal] = useState(false);

    const onClickOpenListPatientModal = () => {
        setIsListPatientModal(true);
    }

    const onClickCloseListPatientModal = () => {
        setIsListPatientModal(false);
    }

    const onClickSearchByRegistrationNumber = () => {
        return navigate(`/patients/${registrationNumber}/edit?tab=visit`)
    }

    return (
        <>
            <ListOfPatientsModal 
                isOpen={isListPatientModal}
                onClose={onClickCloseListPatientModal}
            />

            <div className="create-patients space-y-8">
                <div className="flex items-center justify-between">
                    <Breadcrumb
                        title={'Create a New Patient'}
                        back={'/patients/all'}
                    />

                    <div className="flex items-center gap-2">
                        <Input
                            placeholder={t('patients.form.input.registration_number')}
                            onChange={(e) => setRegistrationNumber(e.target.value)}
                        />
                        
                        <Button
                            onClick={onClickSearchByRegistrationNumber}
                            variant='primary-outline'
                            icon='mynaui:search'
                            className='!py-3'
                        />

                        <Button
                            onClick={onClickOpenListPatientModal}
                            variant='primary-outline'
                            icon='solar:global-bold'
                            className='!py-3'
                        />

                        <Button
                            to={'/patients/create'}
                            variant='primary-outline'
                            icon='ix:reset'
                            label={t('patients.label.reset_form')}
                        />
                    </div>
                </div>
                
                <CreatePatientForm />
            </div>
        </>
    )
}

export default CreatePatientTemplate;
