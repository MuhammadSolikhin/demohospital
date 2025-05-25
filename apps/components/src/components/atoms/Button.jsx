import PropTypes from 'prop-types';
import Icon from './Icon';
import { useNavigate } from 'react-router-dom';

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
    textPosition = 'center'
}) => {
    const navigate = useNavigate();

    const styles = {
        'none': 'bg-transparent',
        'primary': 'bg-primary border-primary text-white hover:cursor-pointer',
        'primary-outline': 'bg-white border border-primary text-primary hover:cursor-pointer hover:bg-primary hover:text-white',
        'primary-light': 'bg-primary-light border-primary text-primary hover:cursor-pointer',
        'primary-light-outline': 'bg-white border border-primary-light text-primary hover:cursor-pointer hover:bg-primary-light hover:text-primary',
        'secondary': 'bg-secondary border-secondary text-black hover:cursor-pointer',
        'secondary-outline': 'bg-white border border-secondary text-black hover:cursor-pointer hover:bg-secondary hover:text-black',
        'orange': 'bg-orange border-orange text-white hover:cursor-pointer hover:bg-orange-dark',
        'orange-outline': 'bg-white border border-orange text-orange hover:cursor-pointer hover:bg-orange hover:text-white',
    }

    const textPositions = {
        'center': 'justify-center',
        'left': 'justify-start',
        'right': 'justify-end'
    }

    const onClickRedirect = () => {
        return navigate(to);
    }

    return (
        <button
            type={type}
            className={`transition px-4 py-2 whitespace-nowrap rounded-primary ${styles[variant]} ${className}`}
            onClick={to ? onClickRedirect : onClick}
            disabled={loading || disabled}
        >
            <div className={`span flex items-center gap-x-2 ${textPositions[textPosition]}`}>
                {
                    icon ? (
                        <Icon name={icon} />
                    ) : (null)
                }
                {
                    label ? label : (null)
                }
            </div>
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'primary-light', 'secondary', 'primary-outline', 'primary-light-outline', 'secondary-outline', 'orange', 'orange-outline']),
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    textPosition: PropTypes.oneOf(['left', 'center', 'right']),
}

export default Button;
