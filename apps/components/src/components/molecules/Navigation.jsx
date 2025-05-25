import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const Navigation = ({
    menus = [],
}) => {
    const currentPage = useLocation().pathname.substring(1);
    const [currentMenu, setCurrentMenu] = useState(currentPage.split('/'));

    const onClickMenu = (url) => {
        const urlSameWithCurrentMenu = url?.substring(1).split('/').every((item) => currentMenu.includes(item));
        const newMenu = urlSameWithCurrentMenu ? [] : url.split('/');
        setCurrentMenu(newMenu);
    }

    useEffect(() => {
        setCurrentMenu(currentPage.split('/'));
    }, [currentPage]);

    return (
        <nav>
            <ul className="nav space-y-2 overflow-y-auto max-h-[70vh] pl-11 pr-11">
                {
                    menus?.map((menu, key) => {
                        return (
                            <Menu
                                key={key}
                                icon={menu?.icon}
                                name={menu?.name}
                                url={menu?.url}
                                childrens={menu?.children}
                                isActive={menu?.url?.substring(1).split('/').every((item) => currentMenu.includes(item))}
                                onClickMenu={onClickMenu}
                            />
                        )
                    })
                }
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    menus: Array,
    onChangeMenu: Function,
    isActiveMenu: String
}

export default Navigation;
