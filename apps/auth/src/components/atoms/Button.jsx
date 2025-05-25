import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = React.lazy(() => import('components/Button'));

const Button = ({
    type = 'button',
    to = null,
    className = '',
    label = null,
    icon = null,
    variant = 'primary',
    onClick = () => null,
    loading = false,
    disabled = false,
}) => {
    return (
        <ButtonComponent
            type={type}
            to={to}
            label={label}
            icon={icon}
            variant={variant}
            onClick={onClick}
            loading={loading}
            disabled={disabled}
            className={`!w-full !py-3 ${className}`}
        />
    )
}

Button.propTypes = {
    type: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
}

export default Button;
