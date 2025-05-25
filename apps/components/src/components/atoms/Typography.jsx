import PropTypes from "prop-types";

const Typography = ({ variant = 'p', children, className = '' }) => {
    const Tag = variant;
    const baseStyles = {
        h1: "text-4xl font-bold",
        h2: "text-3xl font-semibold",
        h3: "text-2xl font-medium",
        h4: "text-xl font-medium",
        p: "text-base",
        small: "text-sm",
    };

    return (
        <Tag className={`${baseStyles[variant] || ""} ${className}`}>
            {children}
        </Tag>
    );
};

Typography.propTypes = {
    variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "p", "small"]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Typography;
