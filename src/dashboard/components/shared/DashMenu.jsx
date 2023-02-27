//React
import { useState } from 'react';
//React library
import { NavLink } from 'react-router-dom';
//Animation library
import { motion as m } from 'framer-motion';
//Graphic assets
import GiDinStemmeIconNoBg from '@/assets/img/Logo/GiDinStemmeIconNoBg.png';

import {
    HomeIcon,
    DocumentIcon,
    UserGroupIcon,
    CogIcon,
    ArrowLeftOnRectangleIcon,
    PlayCircleIcon,
    TagIcon,
} from '@heroicons/react/24/outline';
import { ReactComponent as LeftArrow } from '@/assets/icons/LeftArrow.svg';

export default function DashMenu() {
    const [open, setOpen] = useState(true);

    const menuItems = [
        { title: 'Dashboard', icon: HomeIcon, path: '/gdsadmin/dashboard' },
        {
            title: 'Bidrag',
            icon: PlayCircleIcon,
            path: '/gdsadmin/contributions',
        },
        { title: 'Tekster', icon: DocumentIcon, path: '/gdsadmin/text' },
        { title: 'Målgrupper', icon: UserGroupIcon, path: '/gdsadmin/target' },
        { title: 'Merkelapper', icon: TagIcon, path: '/gdsadmin/tags' },
        { title: 'Innstillinger', icon: CogIcon, path: '/gdsadmin/settings' },
        {
            title: 'Logg ut',
            icon: ArrowLeftOnRectangleIcon,
            path: '/gdsadmin/',
        },
    ];

    return (
        <div
            className={`flex flex-col w-1/5 h-fit p-5 py-10 shadow-xl ml-10 mr-5 my-10 rounded-3xl ${
                open ? 'w-72' : 'w-20'
            } bg-fred relative`}
        >
            <LeftArrow
                className={`bg-fred h-12 w-12 text-natt rounded-full hover:rotate-12 transition p-1 absolute -right-5 top-[6.5rem] cursor-pointer ${
                    !open && 'rotate-180'
                }`}
                onClick={() => setOpen(!open)}
            />
            <div
                className={`grid place-content-start gap-3 ${
                    open ? 'pl-4' : 'pl-1'
                }  place-items-center`}
            >
                <img
                    alt="Gi Din Stemme logo"
                    src={GiDinStemmeIconNoBg}
                    className="h-12 object-contain hover:rotate-[-20deg] transition-all duration-500 cursor-pointer"
                />
                <h1
                    className={`text-natt origin-left font-medium text-2xl ${
                        !open && 'scale-0'
                    }`}
                >
                    Admin
                </h1>
            </div>
            <ul className="pt-5">
                {menuItems.map((item) => (
                    <NavLink key={item.title} to={item.path}>
                        <li
                            className={` text-natt text-lg item-center gap-2 inline-flex w-full place-items-center cursor-pointer p-3 hover:bg-krystall transition-all duration-200 rounded-md mt-5`}
                        >
                            <div className="text2xl block w-6">
                                <item.icon />
                            </div>
                            <div className={`font-fet ${!open && 'hidden'}`}>
                                {item.title}
                            </div>
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}
