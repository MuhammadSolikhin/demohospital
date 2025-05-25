import React from 'react';
import PharmacyDetailMedicineTable from '../../molecules/Tables/PharmacyDetailMedicineTable';
import { currency } from '../../../helpers/currency.helper';
import { asset } from '../../../helpers/url.helper';

const Card = React.lazy(() => import('components/Card'));
const Typography = React.lazy(() => import('components/Typography'));
const Brand = React.lazy(() => import('components/Brand'));
const Input = React.lazy(() => import('components/Input'));

const rows = [
    {
        id: 1,
        medicine_name: 'Paracetamol',
        expire_date: '01-01-2025',
        price: 10000,
        quantity: 2,
        discount: 0,
        total_amount: 20000
    },
    {
        id: 2,
        medicine_name: 'Paracetamol',
        expire_date: '01-01-2025',
        price: 10000,
        quantity: 2,
        discount: 0,
        total_amount: 20000
    },
    {
        id: 3,
        medicine_name: 'Paracetamol',
        expire_date: '01-01-2025',
        price: 10000,
        quantity: 2,
        discount: 0,
        total_amount: 20000
    }
];

const PharmacyInvoice = () => {
    return (
        <div className="flex justify-center w-full min-h-screen">
            <Card className='p-8 md:w-3/4 w-full !rounded-none relative'>
                <div className="space-y-8">
                    <div className="header flex justify-between items-center">
                        <Typography variant='h4'>Medical Invoice</Typography>
                        <Brand to={null} className='w-44' />
                    </div>
                    <div className="body space-y-8">
                        <div className="user-information grid grid-cols-2">
                            <div className="col-span-1">
                                <table border={0} className='text-sm'>
                                    <tr className='p-4'>
                                        <td>Invoice Number</td>
                                        <td className='p-1 px-4'>:</td>
                                        <td className='font-medium'>291822491294</td>
                                    </tr>
                                    <tr className='p-4'>
                                        <td>Location</td>
                                        <td className='p-1 px-4'>:</td>
                                        <td className='font-medium'>ICAN Hospital Surabbaya</td>
                                    </tr>
                                    <tr className='p-4'>
                                        <td>Date, Time</td>
                                        <td className='p-1 px-4'>:</td>
                                        <td className='font-medium'>03-Apr-2025, 05:00 WIB</td>
                                    </tr>
                                    <tr className='p-4'>
                                        <td>Admission Date</td>
                                        <td className='p-1 px-4'>:</td>
                                        <td className='font-medium'>01-Apr-2025</td>
                                    </tr>
                                    <tr className='p-4'>
                                        <td>Discharge Date</td>
                                        <td className='p-1 px-4'>:</td>
                                        <td className='font-medium'>-</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="col-span-1">
                                <table border={0} className='text-sm'>
                                    <tr className='p-4'>
                                        <td>Patient</td>
                                        <td className='p-1 px-4'>:</td>
                                        <td className='font-medium'>Ade Rizki Wahyudi</td>
                                    </tr>
                                    <tr className='p-4'>
                                        <td>Admission Date</td>
                                        <td className='p-1 px-4'>:</td>
                                        <td className='font-medium'>01-Apr-2025</td>
                                    </tr>
                                    <tr className='p-4'>
                                        <td>Visit No</td>
                                        <td className='p-1 px-4'>:</td>
                                        <td className='font-medium'>124152</td>
                                    </tr>
                                    <tr className='p-4'>
                                        <td>Medical Record No.</td>
                                        <td className='p-1 px-4'>:</td>
                                        <td className='font-medium'>125125125</td>
                                    </tr>
                                    <tr className='p-4'>
                                        <td>Payer</td>
                                        <td className='p-1 px-4'>:</td>
                                        <td className='font-medium'>Febian Z</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div className="medicines">
                            <PharmacyDetailMedicineTable
                                rows={rows}
                                currentStep={1}
                            />
                        </div>

                        <div className="notes">
                            <Input
                                label='Notes'
                                placeholder='Notes'
                                readonly={true}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-x-8">
                            <div className="col-span-1 space-y-4">
                                <Input
                                    label='Payment Method'
                                    value='Debit'
                                    readonly={true}
                                />

                                <div className="form-notes space-y-2">
                                    <label className="form-label" htmlFor={name}>
                                        <Typography variant='small' className='font-medium'>
                                            Notes
                                        </Typography>
                                    </label>
                                    <div
                                        className={`form-input p-2 rounded-lg border border-gray-400 w-full`}
                                    >
                                        Use our quick whatsapp chat or LLM module via our Mobile App for follow-up consultation.
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <table border={0}>
                                    <tr>
                                        <td>
                                            <label className="form-label" htmlFor={name}>
                                                <Typography variant='small' className='font-medium'>
                                                    Subtotal
                                                </Typography>
                                            </label>
                                        </td>
                                        <td>
                                            <Input
                                                value={currency(15214512)}
                                                readonly={true}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-label" htmlFor={name}>
                                                <Typography variant='small' className='font-medium'>
                                                    Insurance
                                                </Typography>
                                            </label>
                                        </td>
                                        <td>
                                            <Input
                                                value={currency(53214)}
                                                readonly={true}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-label" htmlFor={name}>
                                                <Typography variant='small' className='font-medium'>
                                                    Discount
                                                </Typography>
                                            </label>
                                        </td>
                                        <td>
                                            <Input
                                                value={currency(9584829)}
                                                readonly={true}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-label" htmlFor={name}>
                                                <Typography variant='small' className='font-medium'>
                                                    Tax
                                                </Typography>
                                            </label>
                                        </td>
                                        <td>
                                            <Input
                                                value={currency(928384)}
                                                readonly={true}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-label" htmlFor={name}>
                                                <Typography variant='small' className='font-medium'>
                                                    Total
                                                </Typography>
                                            </label>
                                        </td>
                                        <td>
                                            <Input
                                                value={currency(9095942)}
                                                readonly={true}
                                            />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="footer text-center">
                        <Typography className='font-medium'>ICANN HOSPITAL</Typography>
                        <Typography className='text-gray-500'>Jl. Jawa Raya No. 54 Kota Surabaya, Jawa Timur</Typography>
                        <Typography className='text-gray-500'>hello@icann.com <span className="text-black font-medium">www.icann.com</span></Typography>
                    </div>
                </div>
                <div className="absolute top-0 left-0">
                    <img 
                        src={asset('/assets/invoice-border.png')}
                        alt="border"
                    />
                </div>
                <div className="absolute bottom-0 right-0 rotate-180">
                    <img 
                        src={asset('/assets/invoice-border.png')}
                        alt="border"
                    />
                </div>
            </Card>
        </div>
    )
}

export default PharmacyInvoice;
