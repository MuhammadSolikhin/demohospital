import { asset } from "../../helpers/url.helper";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import CardBody from "../atoms/CardBody";
import CardFooter from "../atoms/CardFooter";
import Icon from "../atoms/Icon";
import Typography from "../atoms/Typography";
import UserProfile from "../atoms/UserProfile";
import PropTypes from "prop-types";

const DoctorCard = ({
    name,
    description,
    totalAppointment,
    photo = asset('photo.jpeg')
}) => {
    return (
        <Card className="group transition bg-white hover:bg-primary-light">
            <CardBody className="px-8 py-4 pb-0 flex justify-between items-center gap-4">
                <div className="flex justify-center gap-4">
                    <UserProfile
                        photo={photo}
                    />
                    <div className="user-detail leading-4">
                        <Typography>{name}</Typography>
                        <Typography variant='small' className='text-secondary-dark'>{description}</Typography>
                    </div>
                </div>
                <div className="action flex gap-2">
                    <Button
                        variant="primary-light"
                        icon='ci:chat'
                        className="group-hover:!bg-white !px-2"
                    />
                    <Button
                        variant="primary-light"
                        icon='tabler:phone'
                        className="group-hover:!bg-white !px-2"
                    />
                </div>
            </CardBody>
            <CardFooter className="pt-2 pb-4 px-8">
                <span className="flex items-center justify-start gap-2">
                    <Icon name='hugeicons:note' size={24} />
                    {totalAppointment} Appointments
                </span>
            </CardFooter>
        </Card>
    )
}

DoctorCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    totalAppointment: PropTypes.number.isRequired,
    photo: PropTypes.string
}

export default DoctorCard;
