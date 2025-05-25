import React, { useState } from 'react';
import SupplierFormModal from '../../../molecules/Modals/SupplierFormModal';
import SupplierTransactionHistoryTable from '../../../molecules/Tables/SupplierTransactionHistoryTable';

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Button = React.lazy(() => import('components/Button'));
const Typography = React.lazy(() => import('components/Typography'));
const Card = React.lazy(() => import('components/Card'))
const Icon = React.lazy(() => import('components/Icon'));

const columns = [
    { field: 'id_code', headerName: 'ID Code', width: 200 },
    { field: 'date_po', headerName: 'Date PO', width: 200 },
    { field: 'date_received', headerName: 'Date Received', width: 200 },
    { field: 'po_status', headerName: 'PO Status', width: 200 },
    { field: 'total_price', headerName: 'Total Price (Rp)', width: 200 },
    { field: 'payment_status', headerName: 'Payment Status', width: 200 },
];

const rows = [
    {
        id: 1,
        id_code: 'PO-20240701',
        date_po: '2024-07-01',
        date_received: '2024-07-05',
        po_status: 'Completed',
        total_price: '1,500,000',
        payment_status: 'Paid',
    },
    {
        id: 2,
        id_code: 'PO-20240702',
        date_po: '2024-07-02',
        date_received: '2024-07-06',
        po_status: 'Pending',
        total_price: '2,300,000',
        payment_status: 'Unpaid',
    },
    {
        id: 3,
        id_code: 'PO-20240703',
        date_po: '2024-07-03',
        date_received: '2024-07-07',
        po_status: 'In Progress',
        total_price: '750,000',
        payment_status: 'Partially Paid',
    },
    {
        id: 4,
        id_code: 'PO-20240704',
        date_po: '2024-07-04',
        date_received: '2024-07-08',
        po_status: 'Cancelled',
        total_price: '1,200,000',
        payment_status: 'Refunded',
    },
    {
        id: 5,
        id_code: 'PO-20240705',
        date_po: '2024-07-05',
        date_received: '2024-07-09',
        po_status: 'Completed',
        total_price: '3,800,000',
        payment_status: 'Paid',
    },
];

const SupplierDetailTemplate = () => {
    const [isSupplierFormModal, setIsSupplierFormModal] = useState(false);

    const onClickOpenSupplierFormModal = () => {
        setIsSupplierFormModal(true);
    }

    const onClickCloseSupplierFormModal = () => {
        setIsSupplierFormModal(false);
    }

    const onClickEdit = (params) => {
        console.log(params)
    }

    const onClickDelete = (params) => {
        console.log(params)
    }

    const onClickPrint = (params) => {
        console.log(params);
    }

    return (
        <>
            <div className="supplier-detail space-y-8">
                <Breadcrumb title='Detail Supplier' />
                <div className=" grid gap-4 grid-cols-6">
                    <div className="col-span-4">
                        <div className="flex justify-between items-center">
                            <Typography variant='h4'>Data</Typography>
                            <div className="action">
                                <Button
                                    onClick={onClickOpenSupplierFormModal}
                                    variant="none"
                                    className="text-primary"
                                    icon="gridicons:add"
                                    label="Edit"
                                />
                            </div>
                        </div>

                        <Card className='p-8'>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                <div className="col-span-1">
                                    <Typography variant='small'>Supplier Name <span className='text-red-500'>*</span></Typography>
                                    <Typography>Ade Rizki Wahyudi</Typography>
                                </div>
                                <div className="col-span-1">
                                    <Typography variant='small'>Contact <span className='text-red-500'>*</span></Typography>
                                    <Typography>6274827321</Typography>
                                </div>
                                <div className="col-span-1">
                                    <Typography variant='small'>Email <span className='text-red-500'>*</span></Typography>
                                    <Typography>test@test.mail</Typography>
                                </div>
                                <div className="col-span-1">
                                    <Typography variant='small'>Delivery Date Start</Typography>
                                    <Typography>April 05, 2025</Typography>
                                </div>
                                <div className="info">
                                    <Typography variant='small'>Address</Typography>
                                    <Typography>Jl. Jakarta</Typography>
                                </div>
                                <div className="info">
                                    <Typography variant='small'>Detail Address</Typography>
                                    <Typography>Jl. Jakarta</Typography>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-span-2 space-y-3">
                        <Typography variant='h4'>Performance</Typography>
                        <Card className='p-8 text-center'>
                            <div className="space-y-4">
                                <Typography variant='p' className='!font-semibold'>Timeliness of Delivery</Typography>
                                <Typography variant='h1'>4,7</Typography>
                                <div className="flex gap-1 items-center justify-center">
                                    <Icon name='material-symbols-light:star-rounded' className='text-yellow-300' size={36} />
                                    <Icon name='material-symbols-light:star-rounded' className='text-yellow-300' size={36} />
                                    <Icon name='material-symbols-light:star-rounded' className='text-yellow-300' size={36} />
                                    <Icon name='material-symbols-light:star-rounded' className='text-yellow-300' size={36} />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="transaction-history">
                    <SupplierTransactionHistoryTable
                        rows={rows}
                        columns={columns}
                        onEdit={onClickEdit}
                        onDelete={onClickDelete}
                        onPrint={onClickPrint}
                    />
                </div>
            </div>

            <SupplierFormModal
                isOpen={isSupplierFormModal}
                onClose={onClickCloseSupplierFormModal}
            />
        </>
    )
}

export default SupplierDetailTemplate;
