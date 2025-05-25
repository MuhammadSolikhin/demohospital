import PropTypes from 'prop-types';

const Checkbox = ({
    label,
    className,
    register,
    name,
    value = '',
    onChange = () => null,
    checked = false
}) => {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <input
                {...(register ? register(name) : {})}
                type="checkbox"
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <label>{label}</label>
        </div>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    register: PropTypes.any,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
}

export default Checkbox;
