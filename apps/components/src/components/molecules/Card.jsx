import PropTypes from 'prop-types';
import Typography from '../atoms/Typography';

const Card = ({
    children,
    className = '',
    title = null,
}) => {
    return (
        <div className={`card bg-white rounded-primary ${className}`}>
            {title && (
                <div className="card-header p-4 border-b">
                    <Typography variant={'h4'}>{title}</Typography>
                </div>
            )}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
};

export default Card;
