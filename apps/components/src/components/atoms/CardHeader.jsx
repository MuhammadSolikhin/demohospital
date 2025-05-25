import PropTypes from 'prop-types';

const CardHeader = ({
    className = '',
    children
}) => {
    return (
        <div className={`card-header ${className}`}>
            {children}
        </div>
    )
}

CardHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default CardHeader;
