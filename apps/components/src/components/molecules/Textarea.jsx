import PropTypes from 'prop-types';
import Typography from '../atoms/Typography';

const Textarea = ({
    label,
    name,
    value,
    placeholder,
    readonly = false,
    className,
    errors,
    onChange = () => null,
    register,
    isRequired = false,
    tabIndex = 1,
}) => {
    return (
        <div className="form-group w-full space-y-2">
            {label && (
                <label className="form-label" htmlFor={name}>
                    <Typography variant='small' className='font-medium'>
                        {label} {isRequired && <span className='text-danger'>*</span>}
                    </Typography>
                </label>
            )}

            <div className="input-group relative">
                <textarea
                    className={`form-input p-2 rounded-lg border border-gray-400 w-full ${className}`}
                    name={name}
                    id={name}
                    value={value}
                    readOnly={readonly}
                    placeholder={placeholder || name || 'Enter'}
                    onChange={onChange}
                    tabIndex={tabIndex}
                    {...(register ? register(name) : {})}
                />
            </div>

            {errors?.[name] && (
                <span className="form-error text-sm text-danger">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    );
};

Textarea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    readonly: PropTypes.bool,
    className: PropTypes.string,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    register: PropTypes.func,
    isRequired: PropTypes.bool,
    tabIndex: PropTypes.number,
};

export default Textarea;
