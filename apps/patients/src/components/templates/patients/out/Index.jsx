import React from 'react';
import PatientTable from '../../../organisms/tables/patients/Index';
import { useNavigate } from "react-router-dom";

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Button = React.lazy(() => import('components/Button'));

const columns = [
    { 
        field: 'id',
        headerName: 'IPD No.',
        width: 70,
        renderCell: (params) => <span className='text-orange'>{params.row.id}</span>
    },
    { 
        field: 'name',
        headerName: 'Name',
        width: 150,
        renderCell: (params) => <span className='text-primary'>{params.row.name}</span>
    },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'religion', headerName: 'Religion', width: 100 },
    { field: 'phone', headerName: 'Phone', width: 100 },
    { field: 'consultant', headerName: 'Consultant', width: 100 },
    { field: 'procedur', headerName: 'Procedur', width: 100 },
    { field: 'amount', headerName: 'Amount', width: 100 }
];

const rows = [
    { id: 1, name: 'John Doe', gender: 'Male', religion: 'Christianity', phone: '1234567890', consultant: 'Dr. Smith', procedur: 'X-Ray', amount: 150 },
    { id: 2, name: 'Jane Smith', gender: 'Female', religion: 'Islam', phone: '0987654321', consultant: 'Dr. Johnson', procedur: 'MRI', amount: 200 },
    { id: 3, name: 'Michael Brown', gender: 'Male', religion: 'Hinduism', phone: '1122334455', consultant: 'Dr. Lee', procedur: 'Blood Test', amount: 50 },
    { id: 4, name: 'Emily Davis', gender: 'Female', religion: 'Buddhism', phone: '6677889900', consultant: 'Dr. White', procedur: 'Ultrasound', amount: 180 },
    { id: 5, name: 'David Wilson', gender: 'Male', religion: 'Christianity', phone: '1111111111', consultant: 'Dr. Green', procedur: 'CT Scan', amount: 300 },
    { id: 6, name: 'Olivia Johnson', gender: 'Female', religion: 'Islam', phone: '2222222222', consultant: 'Dr. Brown', procedur: 'ECG', amount: 120 },
    { id: 7, name: 'Daniel Miller', gender: 'Male', religion: 'Hinduism', phone: '3333333333', consultant: 'Dr. Taylor', procedur: 'Blood Pressure', amount: 30 },
    { id: 8, name: 'Sophia Garcia', gender: 'Female', religion: 'Christianity', phone: '4444444444', consultant: 'Dr. Harris', procedur: 'Endoscopy', amount: 400 },
    { id: 9, name: 'James Martinez', gender: 'Male', religion: 'Buddhism', phone: '5555555555', consultant: 'Dr. Clark', procedur: 'Biopsy', amount: 250 },
    { id: 10, name: 'Isabella Anderson', gender: 'Female', religion: 'Islam', phone: '6666666666', consultant: 'Dr. Moore', procedur: 'Dialysis', amount: 500 },
    { id: 11, name: 'Ethan Thomas', gender: 'Male', religion: 'Hinduism', phone: '7777777777', consultant: 'Dr. Thompson', procedur: 'Surgery', amount: 1000 },
    { id: 12, name: 'Mia White', gender: 'Female', religion: 'Christianity', phone: '8888888888', consultant: 'Dr. Adams', procedur: 'Dental Cleaning', amount: 100 },
    { id: 13, name: 'Alexander Lewis', gender: 'Male', religion: 'Buddhism', phone: '9999999999', consultant: 'Dr. Nelson', procedur: 'Fracture Treatment', amount: 450 },
    { id: 14, name: 'Charlotte Lee', gender: 'Female', religion: 'Islam', phone: '1010101010', consultant: 'Dr. Walker', procedur: 'Thyroid Test', amount: 60 },
    { id: 15, name: 'Benjamin Harris', gender: 'Male', religion: 'Christianity', phone: '1212121212', consultant: 'Dr. Perez', procedur: 'Physiotherapy', amount: 350 },
    { id: 16, name: 'Amelia King', gender: 'Female', religion: 'Hinduism', phone: '1313131313', consultant: 'Dr. Roberts', procedur: 'Cholesterol Test', amount: 80 },
    { id: 17, name: 'Lucas Scott', gender: 'Male', religion: 'Buddhism', phone: '1414141414', consultant: 'Dr. Carter', procedur: 'Liver Function Test', amount: 90 },
    { id: 18, name: 'Harper Young', gender: 'Female', religion: 'Islam', phone: '1515151515', consultant: 'Dr. Phillips', procedur: 'Kidney Function Test', amount: 110 },
    { id: 19, name: 'Henry Allen', gender: 'Male', religion: 'Christianity', phone: '1616161616', consultant: 'Dr. Mitchell', procedur: 'Hearing Test', amount: 70 },
    { id: 20, name: 'Grace Wright', gender: 'Female', religion: 'Buddhism', phone: '1717171717', consultant: 'Dr. Hill', procedur: 'Eye Check-up', amount: 140 },
];

const OutPatientTemplate = () => {
    const navigate = useNavigate();
        
    const onEditPatient = (params) => {
        return navigate(`/patients/out/${params.id}/edit`);
    }

    return (
        <div className='patients space-y-8'>
            <div className="patient-header flex items-center justify-between">
                <Breadcrumb
                    title={'Out Patients'}
                />

                <Button
                    to="/patients/out/create"
                    variant="none"
                    className="text-primary"
                    icon="gridicons:add"
                    label="Add Patient"
                />
            </div>

            <PatientTable
                title={'Out Patients'}
                rows={rows}
                columns={columns}
                onEdit={onEditPatient}
            />
        </div>
    )
}

export default OutPatientTemplate;
