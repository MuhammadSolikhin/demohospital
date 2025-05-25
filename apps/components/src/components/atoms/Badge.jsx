import PropTypes from 'prop-types';
import Icon from './Icon';

const Badge = ({
    variant='primary',
    title,
    icon,
}) => {
    const styles = {
        'primary': 'bg-primary text-white',
        'secondary': 'bg-secondary text-black',
        'success': 'bg-success-light border-success text-zinc-800',
        'danger': 'bg-danger-light border-danger text-zinc-800',
        'warning': 'bg-warning-light border-warning text-zinc-800',
    }
    
    return (
        <div className={`rounded-primary border py-1 px-2 ${styles[variant]} w-fit text-sm`}>
            <span className="flex gap-2">
                {
                    icon ? (
                        <Icon name={icon} />
                    ) : (null)
                }
                {title}
            </span>
        </div>
    );
}

Badge.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning']),
    title: PropTypes.string,
    icon: PropTypes.string,
}

export default Badge;
