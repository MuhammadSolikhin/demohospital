import { asset } from "../../helpers/url.helper";
import Link from "./Link";
import PropTypes from 'prop-types';

const Brand = ({
    width = '100%',
    className = '',
    to = '/'
}) => {
    return (
        <Link
            {...(to ? { to } : {})}
        >
            <img src={`${asset('brand.png')}`} alt="Icann" width={width} className={`${className}`} />
        </Link>
    );
}

Brand.propTypes = {
    width: PropTypes.string,
    className: PropTypes.string,
    to: PropTypes.string
}

export default Brand;
