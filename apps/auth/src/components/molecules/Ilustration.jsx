import PropTypes from 'prop-types';
import { asset } from '../../helpers/url.helper';

const Ilustration = ({
    className
}) => {
    return (
        <div className={`relative ${className}`}>
            <img src={asset('/assets/ilustration-ellipse-1.png')} alt="ilustration" className="absolute -top-20 left-0 w-40" />
            <img src={asset('/assets/ilustration.png')} alt="ilustration" className="w-2/3 m-auto" />
            <img src={asset('/assets/ilustration-ellipse-2.png')} alt="ilustration" className="absolute -bottom-28 right-0 w-52" />
        </div>
    )
}

Ilustration.propTypes = {
    className: PropTypes.string,
}

export default Ilustration;
