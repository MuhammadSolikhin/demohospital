import PropTypes from 'prop-types';
import Brand from "../atoms/Brand";
import Navigation from "../molecules/Navigation";

const Sidebar = ({
    menus = [],
    className = ''
}) => {
    return (
        <div className={`aside z-10 h-screen ${className}`}>
            <div className="bg-white shadow-2xl h-screen rounded-tr-[50px] pt-5 pb-10 transition xl:w-72 w-36 hover:!w-72">
                <div className="brand w-fit m-auto mb-16 px-5">
                    <Brand width="166" className="xl:scale-100 scale-50 group-hover:!scale-100" />
                </div>
                <Navigation
                    menus={menus}
                />
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    menus: PropTypes.array,
    className: PropTypes.string,
}

export default Sidebar;
