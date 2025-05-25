import React from 'react';
import PropTypes from 'prop-types';
import { asset } from '../../../../helpers/url.helper';

const Typography = React.lazy(() => import('components/Typography'));
const Button = React.lazy(() => import('components/Button'));

const MedicineCard = ({
    photo = asset('medicine.png'),
    name = 'Medicine',
    category = [],
    quantity = 1,
}) => {
    return (
        <div className="card rounded-md p-4 border border-primary-light bg-primary-light/10 w-full">
            <div className="flex gap-4">
                <div className="w-14 border border-gray-200 rounded-md overflow-hidden">
                    <img src={photo} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="description flex flex-col">
                    <Typography className='font-medium'>{name}</Typography>
                    <div className="flex gap-2">
                        {
                            category ? (
                                category?.map((item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className={`rounded-full border border-primary p-2 ${item?.selected ? 'bg-primary text-white' : 'bg-transparent text-primary'} text-sm`}
                                        >
                                            {item?.name}
                                        </div>
                                    )
                                })
                            ) : (null)
                        }
                    </div>
                    <div className="flex gap-4 items-center">
                        <Button
                            variant="primary"
                            icon='tabler:minus'
                        />
                        <Typography>{quantity}</Typography>
                        <Button
                            variant="primary"
                            icon='tabler:plus'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

MedicineCard.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    quantity: PropTypes.number
}

export default MedicineCard;
