import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

const Link = ({
    to = null,
    className = '',
    children,
    onClick = () => null
}) => {
    return (
            to ? (
                <NavLink
                    to={to}
                    className={className}
                >
                    {children}
                </NavLink>
            ) : (
                <button className={`${className}`} onClick={onClick}>
                    {children}
                </button>
            )
    )
}

Link.propTypes = {
    to: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
}

export default Link;
