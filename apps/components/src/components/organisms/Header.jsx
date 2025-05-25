import PropTypes from 'prop-types';
import BadgeCount from "../atoms/BadgeCount";
import Icon from "../atoms/Icon";
import Language from "../molecules/Language";
import Profile from "../molecules/Profile";
import Search from "../molecules/Search";

const Header = ({
    className = '',
    language = '',
    onChangeLanguage = () => null,
}) => {
    return (
        <div className={`w-full z-10 bg-white shadow-xl p-4 topbar flex items-center justify-end sm:!justify-between md:!justify-between xl:!justify-between ${className}`}>
            <div className="xl:block hidden xl:text-base text-sm font-semibold text-gray-800 desc whitespace-nowrap">
                <span>Health Management System</span>
            </div>
            
            <div className="hidden xl:block md:block sm:block">
                <Search />
            </div>

            <div className="gap-3 md:flex hidden">
                <a href="#" className="text-secondary-dark self-center text-2xl">
                    <Icon name='solar:clipboard-check-outline' />
                </a>
                <a href="#" className="text-secondary-dark self-center text-2xl">
                    <Icon name='icon-park-outline:sleep-two' />
                </a>
                <a href="#" className="text-secondary-dark self-center text-2xl">
                    <Icon name='ph:chats-duotone' />
                </a>
                <a href="#" className="relative text-secondary-dark self-center text-2xl">
                    <Icon name='mage:notification-bell' />
                    <div className="absolute -right-3 top-0">
                        <BadgeCount total={5} />
                    </div>
                </a>
            </div>

            <div className="hidden xl:block md:block sm:block">
                <Language 
                    value={language}
                    onChange={onChangeLanguage}
                />
            </div>

            <Profile />
        </div>
    )
}

Header.propTypes = {
    language: PropTypes.string,
    onChangeLanguage: PropTypes.func,
    className: PropTypes.string,
}

export default Header;
