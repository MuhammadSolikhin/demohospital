import React, { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import EditPatientForm from "../../../../organisms/forms/patients/EditPatientForm";
import VisitTable from "../../../../organisms/tables/visit/Index";
import VisitFormModal from "../../../../organisms/modals/patients/VisitFormModal";
import ListOfPatientsModal from "../../../../organisms/modals/patients/ListOfPatientModal";
import { useTranslation } from "react-i18next";

const Card = React.lazy(() => import("components/Card"));
const CardBody = React.lazy(() => import('components/CardBody'));
const UserProfile = React.lazy(() => import('components/UserProfile'));
const Typography = React.lazy(() => import('components/Typography'));
const Button = React.lazy(() => import('components/Button'));
const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Icon = React.lazy(() => import('components/Icon'));
const Input = React.lazy(() => import('components/Input'));

const visitTableColumns = [
    {
        field: 'id',
        headerName: 'No.',
        width: 25,
        headerAlign: 'center',
        alert: 'center'
    },
    {
        field: 'type',
        headerName: 'Visit Type',
        width: 150,
        headerAlign: 'center',
    },
    {
        field: 'date',
        headerName: 'Date of Visit',
        width: 150,
        headerAlign: 'center',
    },
    {
        field: 'doctor',
        headerName: 'Doctor',
        width: 150,
        headerAlign: 'center',
    },
    {
        field: 'speciality',
        headerName: 'Speciality',
        width: 150,
        headerAlign: 'center',
    },
    {
        field: 'complain',
        headerName: 'Complain',
        width: 150,
        headerAlign: 'center',
    },
];

const visitTableRows = [
    {
        id: 1,
        type: 'Initial Consultation',
        date: '2025-01-15',
        doctor: 'Dr. John Doe',
        speciality: 'Cardiology',
        complain: 'Chest pain, dizziness',
    },
    {
        id: 2,
        type: 'Follow-up',
        date: '2025-01-20',
        doctor: 'Dr. Jane Smith',
        speciality: 'Neurology',
        complain: 'Headaches, blurred vision',
    },
    {
        id: 3,
        type: 'Routine Checkup',
        date: '2025-01-22',
        doctor: 'Dr. Michael Lee',
        speciality: 'General Medicine',
        complain: 'General fatigue',
    },
    {
        id: 4,
        type: 'Emergency Visit',
        date: '2025-01-25',
        doctor: 'Dr. Emily Davis',
        speciality: 'Orthopedics',
        complain: 'Severe leg pain',
    },
];

const EditPatientTemplate = () => {
    const navigate = useNavigate();

    const { t } = useTranslation();
    const { id } = useParams();

    const [params] = useSearchParams();
    const [menu, setMenu] = useState(params.get('tab') || 'biodata');
    const [photo, setPhoto] = useState(null);
    const [isListPatientModal, setIsListPatientModal] = useState(false);
    const [isOpenAddVisitForm, setIsOpenAddVisitForm] = useState(false);
    const [registrationNumber, setRegistrationNumber] = useState(id);
    
    const onChangeMenu = (menu) => {
        setMenu(menu);
    }

    const onChangePhoto = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(URL.createObjectURL(file))
        }
    }

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
            
            <div className="edit-patients space-y-8">
                <div className="flex items-center justify-between">
                    <Breadcrumb
                        title={'Edit a Patient'}
                        back={'/patients/all'}
                    />

                    <div className="flex items-center gap-2">
                        <Input
                            placeholder={t('patients.form.input.registration_number')}
                            onChange={(e) => setRegistrationNumber(e.target.value)}
                            value={registrationNumber}
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
                            icon='gridicons:add'
                            label={t('patients.label.add_patient')}
                        />
                    </div>
                </div>

                <Card>
                    <CardBody className='p-8 flex items-center justify-between gap-4 w-full'>
                        <div className="user flex items-center gap-4">
                            <div className="profile flex flex-col items-center justify-center">
                                <div className="overflow-hidden relative rounded-full">
                                    <UserProfile
                                        photo={photo}
                                        className='!w-24 !h-24'
                                    />
                                    <label 
                                        htmlFor="photo"
                                        className='!px-none pb-2 pt-1 !text-xs text-center absolute bottom-0 left-0 !bg-black/50 text-white rounded-b-full w-full flex justify-center items-center cursor-pointer'
                                    >
                                        <Icon name='iconoir:camera' size='16' />
                                    </label>
                                    <input 
                                        type="file" 
                                        name="photo" 
                                        id="photo" 
                                        className="hidden"
                                        onChange={onChangePhoto}
                                    />
                                </div>
                            </div>
                            <div className="information">
                                <Typography variant='h4'>Ade Rizki Wahyudi</Typography>
                                <Typography variant='p'>Laki-Laki</Typography>
                            </div>
                        </div>
                        <div className="actions flex gap-4 items-center">
                            <Button
                                variant='none'
                                icon='solar:phone-outline'
                                className='text-xl shadow'
                            />

                            <Button
                                variant='none'
                                icon='tabler:message'
                                className='text-xl shadow'
                            />
                        </div>
                    </CardBody>
                </Card>

                <div className="menus flex gap-2 border-b border-primary">
                    <Button 
                        variant='none'
                        onClick={() => onChangeMenu('biodata')}
                        className={`!rounded-none ${menu === 'biodata' ? 'border-b-2 border-primary text-primary' : ''}`}
                        label='Biodata'
                    />
                    <Button 
                        variant='none'
                        onClick={() => onChangeMenu('visit')}
                        className={`!rounded-none ${menu === 'visit' ? 'border-b-2 border-primary text-primary' : ''}`}
                        label='Visit Histories'
                    />
                </div>

                {
                    menu === 'biodata' && (
                        <EditPatientForm />
                    )
                }

                {
                    menu === 'visit' && (
                        <div className="space-y-2">
                            <VisitFormModal
                                isOpen={isOpenAddVisitForm}
                                onClose={() => setIsOpenAddVisitForm(false)}
                            />
                            <div className="flex items-center justify-between">
                                <Typography variant='p' className='font-semibold'>Visit History</Typography>
                                <Button
                                    variant='none'
                                    icon='gridicons:add'
                                    label='Add Visit'
                                    className='text-primary'
                                    onClick={() => setIsOpenAddVisitForm(true)}
                                />
                            </div>
                            <VisitTable
                                columns={visitTableColumns}
                                rows={visitTableRows}
                                onEdit={() => setIsOpenAddVisitForm(true)}
                                onDelete={() => null}
                                onPrint={() => null}
                            />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default EditPatientTemplate;
