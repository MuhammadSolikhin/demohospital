import PropTypes from 'prop-types';

const CardFooter = ({
    className = '',
    children
}) => {
    return (
        <div className={`card-footer p-4 ${className}`}>
            {children}
        </div>
    )
}

CardFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default CardFooter;
