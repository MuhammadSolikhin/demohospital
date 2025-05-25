import PropTypes from 'prop-types';
import Typography from '../atoms/Typography';

const FormGroup = ({ title, children, id, className }) => {
    return (
        <div className={`form-group-with-title space-y-4`} id={id}>
            <Typography variant='p' className='border-b pb-2 border-gray-400 text-primary font-semibold'>
                {title}
            </Typography>
            <div className={`form-group ${className}`}>
                {children}
            </div>
        </div>
    )
}

FormGroup.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
}

export default FormGroup;
