import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AddressFormModal from '../AddressFormModal';

const Modal = React.lazy(() => import('components/Modal'));
const Input = React.lazy(() => import('components/Input'));
const Button = React.lazy(() => import('components/Button'));

const AddressPurchaseOrderModal = ({
    addresses = [],
    isOpen = false,
    isLoading = false,
    onClose = () => null,
    onSelect = () => null,
    onSearch = () => null,
}) => {
    const [isModalNewAddress, setIsModalNewAddress] = useState(false);
    return (
        <>
            <Modal
                title='Select Address'
                size='sm'
                isOpen={isOpen}
                onClose={onClose}
                footer={false}
                className='!p-0 space-y-4'
            >
                <Input
                    type='search'
                    placeholder='Search'
                    onChange={onSearch}
                    icon='bx:search'
                />

                <Button
                    onClick={() => setIsModalNewAddress(true)}
                    variant="none"
                    className="text-primary !px-0"
                    icon="gridicons:add"
                    label="Add New Address"
                />

                {
                    isLoading && (<div className='text-center'>Loading</div>)
                }

                {
                    addresses?.length === 0 && <div className='text-center'>No address found</div>
                }

                <div className="space-y-2">
                    {
                        addresses?.map((address, index) => (
                            <Button
                                key={index}
                                onClick={() => onSelect(address?.value)}
                                variant="secondary-outline"
                                className="w-full text-gray-500 border-gray-300"
                                textPosition="left"
                                label={address?.label}
                            />
                        ))
                    }
                </div>
            </Modal>

            <AddressFormModal
                isOpen={isModalNewAddress}
                onClose={() => setIsModalNewAddress(false)}
            />
        </>
    )
}

AddressPurchaseOrderModal.propTypes = {
    address: PropTypes.array,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onSelect: PropTypes.func,
    onSearch: PropTypes.func,
};

export default AddressPurchaseOrderModal;
