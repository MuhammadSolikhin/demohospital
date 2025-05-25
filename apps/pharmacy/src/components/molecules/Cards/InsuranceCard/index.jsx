import React from "react";
import PropTypes from 'prop-types';

const Card = React.lazy(() => import('components/Card'));
const Input = React.lazy(() => import('components/Input'));
const Typography = React.lazy(() => import('components/Typography'));
const Checkbox = React.lazy(() => import('components/Checkbox'));

const InsuranceCard = ({
    medicines = []
}) => {
    return (
        <Card className='shadow-xl p-4'>
            <div className="space-y-4">
                <Input
                    label='Search Insurance'
                    placeholder='Search Insurance'
                />
                <Card className='shadow-xl p-4'>
                    <Typography variant='h4'>Budi Santoso</Typography>
                    <Typography variant='small'>332123482372138</Typography>
                    <br />
                    <Typography variant='h3' className='text-primary'>XXXXXXXXXXXX473</Typography>
                </Card>
                <div className="overflow-x-auto">
                    <table>
                        <thead>
                            <tr className='bg-primary-light/10 p-4'>
                                <th className='w-52 font-medium text-nowrap p-4'>Service</th>
                                <th className='w-52 font-medium text-nowrap p-4'>Stock</th>
                                <th className='w-52 font-medium text-nowrap p-4'>Date</th>
                                <th className='w-52 font-medium text-nowrap p-4 text-center'>Amount (IDR)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                medicines?.map((row, i) => (
                                    <tr key={i} className={`${i % 2 == 0 ? 'bg-primary-light/50' : 'bg-primary-light/10'}`}>
                                        <td className='p-4 text-nowrap'>{row?.medicine_name ?? '-'}</td>
                                        <td className='p-4 text-nowrap text-center'>{row?.stock ?? 1}</td>
                                        <td className='p-4 text-nowrap'>{row?.expire_date ?? '-'}</td>
                                        <td className='p-4 text-nowrap'>{row?.total_amount ?? '-'}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <Checkbox
                    label='Securely save my information for one-click checkout'
                    className='p-4 bg-primary-light/10'
                />
            </div>
        </Card>
    )
}

InsuranceCard.propTypes = {
    medicines: PropTypes.array,
}

export default InsuranceCard;
