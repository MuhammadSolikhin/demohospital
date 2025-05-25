import { useState } from "react";
import BadgeCount from "../atoms/BadgeCount";
import UserProfile from "../atoms/UserProfile";

const Profile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onClickMenu = () => {
        return setIsMenuOpen((val) => !val);
    }

    return (
        <div className="relative">
            <a className="flex gap-4 justify-between hover:cursor-pointer" onClick={onClickMenu}>
                <div className="flex items-center">
                    <UserProfile />
                    <div className="ms-3 leading-3 self-center hidden xl:block">
                        <div className="font-semibold text-base">William Liem</div>
                        <div className="text-secondary-dark text-sm">Super Admin</div>
                    </div>
                </div>
            </a>

            <div className={`menu-list top-14 md:left-0 right-0 w-full bg-white shadow-xl rounded-b-md z-10 absolute ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col">
                    <a href="#" className="w-full transition hover:bg-secondary-light text-semibold p-3 flex justify-between">Dashboard</a>
                    <a href="#" className="w-full transition hover:bg-secondary-light text-semibold p-3 flex justify-between">Report</a>
                    <a href="#" className="w-full transition hover:bg-secondary-light text-semibold p-3 flex justify-between">Room</a>
                    <a href="#" className="w-full transition hover:bg-secondary-light text-semibold p-3 flex justify-between">Message</a>
                    <a href="#" className="w-full transition hover:bg-secondary-light text-semibold p-3 flex justify-between gap-2">Notificaion <BadgeCount total={10} /></a>
                    <a href="#" className="w-full transition hover:bg-secondary-light text-semibold p-3 flex justify-between gap-2">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Profile;
