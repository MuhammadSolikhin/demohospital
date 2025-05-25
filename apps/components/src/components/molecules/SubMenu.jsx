import { NavLink, useLocation } from 'react-router-dom';

const SubMenu = ({
    name,
    url
}) => {
    const location = useLocation();
    return (
        <li className="sub-nav-item">
            <NavLink
                to={url}
                className={`flex gap-2 items-center justify-between w-full py-[11px] px-4 transition rounded-primary ${location.pathname.startsWith(url) ? 'bg-primary text-white' : 'hover:bg-primary text-primary-light hover:text-white'}`}
            >
                <span className="flex gap-4 items-center">
                    {name}
                </span>
            </NavLink>
        </li>
    )
}

SubMenu.propTypes = {
    name: String,
    url: String,
    childrens: Array | null
}

export default SubMenu;
