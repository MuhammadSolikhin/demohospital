import PropTypes from 'prop-types';

const TabAction = ({ children, className }) => {
    console.log('classname:' + className);
    return (
        <div className={`action ${className}`}>
            {children}
        </div>
    )
}

TabAction.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
}

export default TabAction;
