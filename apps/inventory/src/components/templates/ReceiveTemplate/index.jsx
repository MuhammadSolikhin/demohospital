import React from 'react';
import Receive from '../../organisms/Receive';

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Button = React.lazy(() => import('components/Button'));

const ReceiveTemplate = () => {
    const onClickScan = () => {
        console.log('scan!')
    }

    return (
        <div className="receive space-y-8">
            <div className="flex items-center justify-between">
                <Breadcrumb title='Receive' />
                <Button
                    icon='bx:qr-scan'
                    label='Scan QR'
                    variant='none'
                    className='!text-primary'
                    onClick={onClickScan}
                />
            </div>
            <Receive />
        </div>
    )
}

export default ReceiveTemplate;
