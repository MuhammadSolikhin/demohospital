import { useTranslation } from "react-i18next";
import Flyer from "../components/Flyer";
import MenuCard from "../components/Menu";

const DashboardPage = () => {
    const { t } = useTranslation();
    
    const menuItems = [
        { icon: 'ic:round-home', title: t('dashboard.menus.dashboard') },
        { icon: 'ri:calendar-fill', title: t('dashboard.menus.appointment') },
        { icon: 'fa:users', title: t('dashboard.menus.staff') },
        { icon: 'fa6-solid:hospital-user', title: t('dashboard.menus.patient') },
        { icon: 'fa-solid:cash-register', title: t('dashboard.menus.billing') },
        { icon: 'material-symbols:stethoscope', title: t('dashboard.menus.pharmacy') },
        { icon: 'fluent:briefcase-12-filled', title: t('dashboard.menus.inventory') },
        { icon: 'material-symbols:widgets', title: t('dashboard.menus.asset') },
    ];

    return (
        <div className="dashboard">
            <Flyer />
            <div className="grid grid-cols-2 md:!grid-cols-2 xl:!grid-cols-4 gap-4 my-12">
                {menuItems.map((item, index) => (
                    <MenuCard key={index} icon={item.icon} title={item.title} />
                ))}
            </div>
        </div>
    )
}

export default DashboardPage;
