import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = React.lazy(() => import('components/Input'));

const Input = ({
    type = 'text',
    label,
    name,
    value,
    placeholder,
    readonly = false,
    className,
    errors,
    onChange = () => null,
    register = null,
    isRequired = false,
}) => {
    return (
        <InputGroup
            type={type}
            label={label}
            name={name}
            value={value}
            placeholder={placeholder}
            readonly={readonly}
            className={`transition !bg-secondary-semidark !border-secondary-semidark !px-4 !py-3 text-primary focus:!bg-white focus:outline-none focus:border focus:!border-primary focus:shadow-md ${className}`}
            errors={errors}
            onChange={onChange}
            register={register}
            isRequired={isRequired}
        />
    )
}

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    readonly: PropTypes.bool,
    className: PropTypes.string,
    errors: PropTypes.any,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    register: PropTypes.func,
    isRequired: PropTypes.bool,
}

export default Input;
