import React from "react";
import { asset } from "../../../../helpers/url.helper";

const Icon = React.lazy(() => import('components/Icon'));
const Typography = React.lazy(() => import('components/Typography'));

const paymentCategories = [
    {
        id: 1,
        name: 'Cash',
        icon: 'eva:credit-card-outline',
    },
    {
        id: 2,
        name: 'Debit Card',
        icon: 'eva:credit-card-outline',
    },
    {
        id: 3,
        name: 'QRIS',
        icon: 'eva:credit-card-outline',
    },
    {
        id: 4,
        name: 'Bank Transfer',
        icon: 'eva:credit-card-outline',
    }
];

const PaymentCard = () => {
    const [paymentCategory, setPaymentCategory] = React.useState(2);

    const onClickPaymentCategory = (id) => {
        setPaymentCategory(id);
    }

    return (
        <div className="payments space-y-8">
            <div className="flex gap-4">
                {
                    paymentCategories.map((item, i) => {
                        return (
                            <button
                                type="button"
                                className={`p-4 flex flex-row gap-2 border-t-2 ${item?.id == paymentCategory ? 'border-t-primary text-primary bg-primary-light/10' : 'border-t-transparent '}`}
                                key={i}
                                onClick={() => onClickPaymentCategory(item?.id)}
                            >
                                <Icon
                                    name={item?.icon}
                                />
                                <Typography>{item?.name}</Typography>
                            </button>
                        )
                    })
                }
            </div>
            <div className="payment-content">
                <div className="flex flex-col gap-4">
                    <div className="email">
                        <Typography className='font-semibold'>Email</Typography>
                        <Typography variant='small'>susanto.budi@mail.com</Typography>
                    </div>
                    <div className="card-number flex justify-between items-center">
                        <div className="number">
                            <Typography className='font-semibold'>Card Number</Typography>
                            <Typography variant='small'>1234 1234 1234 1234</Typography>
                        </div>
                        <img src={asset('/assets/visa.png')} alt="visa" />
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <Typography className='font-semibold'>Expiration</Typography>
                            <Typography variant='small'>MM/YY</Typography>
                        </div>
                        <div className="col-span-1">
                            <Typography className='font-semibold'>CVV</Typography>
                            <Typography variant='small'>CVV</Typography>
                        </div>
                    </div>
                    <div className="country">
                        <Typography className='font-semibold'>Country</Typography>
                        <Typography variant='small'>Indonesia</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentCard;
