import PropTypes from 'prop-types';
import Typography from "../atoms/Typography";
import Link from '../atoms/Link';
import Icon from '../atoms/Icon';

const Breadcrumb = ({
    title,
    back,
}) => {
    return (
        <div className="breadcrumb flex items-center gap-2">
            {
                back ? (
                    <Link to={back}>
                        <span className="icon text-2xl"><Icon name={'lets-icons:back'} /></span>
                    </Link>
                ) : (null)
            }
            <Typography variant='h4'>{title}</Typography>
        </div>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
    back: PropTypes.string,
}

export default Breadcrumb;
