import PropTypes from 'prop-types';
import Typography from "../atoms/Typography";

const ErrorNotFound = ({
    className = ''
}) => {
    return (
        <div className="page page-error">
            <div className={`flex justify-center gap-2 items-center min-h-[80vh] text-neutral-800 ${className}`}>
                <Typography variant='h4'>404</Typography>
                <Typography variant='h4'>│</Typography>
                <Typography variant='h4'>Not Found</Typography>
            </div>
        </div>
    )
}

ErrorNotFound.propTypes = {
    className: PropTypes.string,
}

export default ErrorNotFound;
