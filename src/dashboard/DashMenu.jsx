//React
import { useEffect, useState, Fragment } from 'react';
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
} from '@heroicons/react/24/solid';
import { ReactComponent as LeftArrow } from '@/assets/icons/LeftArrow.svg';

export default function DashMenu() {
    const [open, setOpen] = useState(true);

    const menuItems = [
        { title: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
        { title: 'Table', icon: PlayCircleIcon, path: '/table' },
        { title: 'Bidrag', icon: PlayCircleIcon, path: '/contributions' },
        { title: 'Tekster', icon: DocumentIcon, path: '/textpage' },
        { title: 'Målgrupper', icon: UserGroupIcon, path: '/targets' },
        { title: 'Innstillinger', icon: CogIcon, path: '/settings' },
        { title: 'Logg ut', icon: ArrowLeftOnRectangleIcon, path: '/login' },
    ];

    return (
        <div
            className={`flex flex-col w-1/5 h-screen p-5 pt-10 ${
                open ? 'w-72' : 'w-20'
            } bg-fred duration-100 relative`}
        >
            <LeftArrow
                className={`bg-fred h-12 w-12 text-natt rounded-full hover:rotate-12 transition p-1 absolute -right-5 bottom-11 cursor-pointer ${
                    !open && 'rotate-180'
                }`}
                onClick={() => setOpen(!open)}
            />
            <div
                className={`inline-flex gap-3 ${
                    open ? 'pl-4' : 'pl-1'
                }  place-items-center`}
            >
                <img
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
            <ul className="pt-10">
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
