import React from "react";

const Input = React.lazy(() => import('components/Input'));

const UserPharmacyDetailForm = () => {
    return (
        <form className='space-y-4'>
            <Input
                type='number'
                label='Duration of Stay (Days)'
                placeholder='5'
            />

            <Input
                type='number'
                label='Number of Bed'
                placeholder='1'
            />

            <Input
                type='text'
                label='Type of Room'
                placeholder='VIP'
            />

            <Input
                type='text'
                label='Doctor Name'
                placeholder='Dr. Arman Maulana'
            />

            <Input
                type='text'
                label='Speciality'
                placeholder='General'
            />

            <Input
                type='text'
                label='Started Treatment'
                placeholder='10 January 2025'
            />

            <Input
                type='text'
                label='End of Treated'
                placeholder='15 January 2025'
            />
        </form>
    )
}

export default UserPharmacyDetailForm;
