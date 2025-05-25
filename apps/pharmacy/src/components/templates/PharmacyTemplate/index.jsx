import React from "react";
import { useNavigate } from "react-router-dom";
import PharmacyTable from "../../molecules/Tables/PharmacyTable";

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Button = React.lazy(() => import('components/Button'));

const rows = [
    {
        id: 1,
        billing_number: 'Billing Number 1',
        case_id: 'Case ID 1',
        date: 'Date 1',
        patient_number: 'Patient Number 1',
        doctor_name: 'Doctor Name 1',
        amount: 'Amount 1',
        paid_amount: 'Paid Amount 1',
    },
    {
        id: 2,
        billing_number: 'Billing Number 2',
        case_id: 'Case ID 2',
        date: 'Date 2',
        patient_number: 'Patient Number 2',
        doctor_name: 'Doctor Name 2',
        amount: 'Amount 2',
        paid_amount: 'Paid Amount 2',
    },
    {
        id: 3,
        billing_number: 'Billing Number 3',
        case_id: 'Case ID 3',
        date: 'Date 3',
        patient_number: 'Patient Number 3', 
        doctor_name: 'Doctor Name 3',    
        amount: 'Amount 3',
        paid_amount: 'Paid Amount 3',
    }
];

const PharmacyTemplate = () => {
    const navigate = useNavigate();
    const columns = [
        {
            field: 'billing_number',
            headerName: 'Bill No.',
            width: 200,
        },
        {
            field: 'case_id',
            headerName: 'Case ID',
            width: 200,
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 200,
        },
        {
            field: 'patient_number',
            headerName: 'Patient Number',
            width: 200,
        },
        {
            field: 'doctor_name',
            headerName: 'Doctor Name',
            width: 200,
        },
        {
            field: 'amount',
            headerName: 'Amount',
            width: 200,
        },
        {
            field: 'paid_amount',
            headerName: 'Paid Amount',
            width: 200,
        }
    ];

    const onClickEdit = (id) => {
        navigate(`/pharmacy/${id}/update`);
    }

    const onClickDelete = (id) => {
        console.log(id);
    }

    const onClickPrint = (id) => {
        console.log(id);
    }

    return (
        <div className="pharmacy space-y-8">
            <div className="flex items-center justify-between">
                <Breadcrumb title='Pharmacy' />
                <Button
                    onClick={() => navigate('/pharmacy/create')}
                    variant="none"
                    className="text-primary"
                    icon="gridicons:add"
                    label="Generate Bill"
                />
            </div>
            <div className="pharmacy-content">
                <PharmacyTable
                    title={'30 medicines formulated this month'}
                    rows={rows}
                    columns={columns}
                    onEdit={onClickEdit}
                    onDelete={onClickDelete}
                    onPrint={onClickPrint}
                />
            </div>
        </div>
    )
}

export default PharmacyTemplate;
