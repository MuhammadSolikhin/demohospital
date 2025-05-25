import React from 'react';
import PropTypes from 'prop-types';
import { asset } from '../../../../helpers/url.helper';

const PhotoProfile = React.lazy(() => import('components/UserProfile'));
const Typography = React.lazy(() => import('components/Typography'));
const Button = React.lazy(() => import('components/Button'));

const UserProfileCard = ({
    photo = asset('user.jpeg'),
    name = 'User',
    numberIdentity = '1234567890',
    gender = 'male',
    age = '20'
}) => {
    return (
        <div className='flex gap-4 items-center justify-between'>
            <div className="user-profile w-16">
                <PhotoProfile
                    photo={photo}
                    className='!w-16 !h-16'
                />
            </div>
            <div className="user-detail-and-action flex items-center justify-between w-full">
                <div className="user-detail flex flex-col">
                    <Typography variant='p' className='font-medium'>{name}</Typography>
                    <Typography variant='small' className='text-gray-600'>{numberIdentity}</Typography>
                    <Typography variant='small' className='text-gray-800 capitalize'>{gender}, {age}th</Typography>
                </div>
                <div className="user-action flex gap-2">
                    <Button
                        variant="secondary-outline"
                        icon='ci:chat'
                        className="group-hover:!bg-white !px-2 shadow-xl"
                    />
                    <Button
                        variant="secondary-outline"
                        icon='tabler:phone'
                        className="group-hover:!bg-white !px-2 shadow-xl"
                    />
                </div>
            </div>
        </div>
    )
}

UserProfileCard.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    numberIdentity: PropTypes.string,
    gender: PropTypes.string,
    age: PropTypes.string,
}

export default UserProfileCard;
