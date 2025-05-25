import PropTypes from 'prop-types';

const Card = ({
    className = '',
    children
}) => {
    return (
        <div className={`card rounded-primary bg-white ${className}`}>
            {children}
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default Card;
