import PropTypes from 'prop-types';

const TabSection = ({
    title,
    children
}) => {
    return (
        <div className="tab-section" title={title}>
            {children}
        </div>
    )
}

TabSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default TabSection;
