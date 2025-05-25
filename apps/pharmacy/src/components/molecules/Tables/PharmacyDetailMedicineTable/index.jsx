import React from 'react';
import PropTypes from 'prop-types';
import { currency } from '../../../../helpers/currency.helper';

const Checkbox = React.lazy(() => import('components/Checkbox'));

const PharmacyDetailMedicineTable = ({
    rows = [],
    currentStep = 1,
    onChangeCheckbox = () => null
}) => {
    return (
        <div className="overflow-x-auto">
            <table>
                <thead>
                    <tr className='bg-primary-light/10 p-4'>
                        {
                            currentStep == 2 ? (
                                <th className='w-52 font-medium text-nowrap p-4'>Check</th>
                            ) : (null)
                        }
                        <th className='w-52 font-medium text-nowrap p-4'>Service/Medicine</th>
                        <th className='w-52 font-medium text-nowrap p-4'>Date</th>
                        <th className='w-52 font-medium text-nowrap p-4 text-center'>Unit Price</th>
                        <th className='w-52 font-medium text-nowrap p-4 text-center'>Quantity</th>
                        <th className='w-52 font-medium text-nowrap p-4 text-center'>Discount</th>
                        <th className='w-52 font-medium text-nowrap p-4 text-center'>Total (IDR)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.length == 0 ? (
                            <tr><td colSpan={currentStep == 2 ? 7 : 6} className='text-center p-4'>No Data Medicine</td></tr>
                        ) : (
                            rows?.map((row, i) => (
                                <tr key={i} className={`${i % 2 == 0 ? 'bg-primary-light/50' : 'bg-primary-light/10'}`}>
                                    {
                                        currentStep == 2 ? (
                                            <th className='flex items-center justify-center p-4'>
                                                <Checkbox
                                                    onChange={() => onChangeCheckbox(row)}
                                                    checked={row?.checked}
                                                />
                                            </th>
                                        ) : (null)
                                    }
                                    <td className='p-4 text-nowrap'>{row?.medicine_name ?? '-'}</td>
                                    <td className='p-4 text-nowrap'>{row?.expire_date ?? '-'}</td>
                                    <td className='p-4 text-nowrap text-center'>{currency(row?.price ?? 0)}</td>
                                    <td className='p-4 text-nowrap text-center'>{row?.quantity ?? 1}</td>
                                    <td className='p-4 text-nowrap text-center'>{currency(row?.discount ?? 0)}</td>
                                    <td className='p-4 text-nowrap text-center'>{currency(row?.total_amount ?? 0)}</td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

PharmacyDetailMedicineTable.propTypes = {
    rows: PropTypes.array,
    currentStep: PropTypes.number,
    onChangeCheckbox: PropTypes.func
}

export default PharmacyDetailMedicineTable;
