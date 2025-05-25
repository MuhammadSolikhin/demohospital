import PropTypes from 'prop-types';
import { Icon as Iconify } from '@iconify/react';

const Icon = ({
    name,
    size,
    className = '',
}) => {
    return (
        <Iconify icon={name} width={size} className={className} />
    );
}

Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
}

export default Icon;
