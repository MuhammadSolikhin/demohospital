import { Icon } from '@iconify/react';
import SubMenu from './SubMenu';
import Link from '../atoms/Link';

const Menu = ({
    name,
    url,
    icon,
    childrens,
    isActive,
    onClickMenu
}) => {
    return (
        <li className="nav-item">
            <Link
                to={childrens?.length > 0 ? null : url}
                className={`flex gap-2 items-center xl:!justify-between justify-center group-hover:!justify-between w-full py-[11px] px-4 transition rounded-primary ${isActive ? 'bg-primary text-white' : 'hover:bg-primary text-primary-light hover:text-white'}`}
                onClick={() => onClickMenu(url)}
            >
                <div className="flex gap-4 items-center xl:justify-normal justify-center group-hover:!justify-between">
                    <span className="icon">
                        <Icon icon={icon} />
                    </span>
                    <span className="xl:block hidden group-hover:!block truncate max-w-28">{name}</span>
                </div>
                {
                    childrens?.length > 0 && (
                        <span className='xl:block hidden group-hover:!block'><Icon icon={isActive ? 'eva:chevron-down-fill' : 'eva:chevron-right-fill' } /></span>
                    )
                }
            </Link>

            {
                isActive && childrens?.length > 0 && (
                    <ul className="sub-nav border border-primary-light p-primary rounded-primary my-2 xl:block hidden group-hover:block">
                        {
                            childrens?.map((children, key) => (
                                <SubMenu
                                    key={key}
                                    name={children?.name}
                                    url={children?.url}
                                />
                            ))
                        }
                    </ul>
                )
            }
        </li>
    )
}

Menu.propTypes = {
    name: String,
    url: String,
    icon: String,
    childrens: Array | null,
    isActive: Boolean,
    onClickMenu: Function
}

export default Menu;
