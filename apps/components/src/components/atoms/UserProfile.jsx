import PropTypes from 'prop-types';
import { asset } from "../../helpers/url.helper";

const UserProfile = ({
    photo = asset('user.jpeg'),
    className = '',
}) => {
    return (
        <div className={`profile rounded-full w-10 h-10 overflow-hidden ${className}`}>
            <img
                src={photo}
                className="object-cover w-full h-full"
                alt="Photo"
            />
        </div>
    )
}

UserProfile.propTypes = {
    photo: PropTypes.string,
    className: PropTypes.string,
}

export default UserProfile;
