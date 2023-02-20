//React
import { useEffect, useState, Fragment } from 'react';
//React library
import { useNavigate } from 'react-router-dom';
//Animation library
import { motion as m } from 'framer-motion';
//Graphic assets
import GiDinStemmeIconNoBg from '@/assets/img/Logo/GiDinStemmeIconNoBg.png';
import { ReactComponent as LeftArrow } from '@/assets/icons/LeftArrow.svg';

export default function Dashboard() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <div
                className={`flex flex-col w-1/5 h-screen p-5 pt-10 ${
                    open ? 'w-72' : 'w-20'
                } bg-solskinn duration-300 relative`}
            >
                <LeftArrow
                    className={`bg-solskinn h-10 w-10 text-natt rounded-full absolute -right-5 top-9 cursor-pointer ${
                        !open && 'rotate-180'
                    }`}
                    onClick={() => setOpen(!open)}
                />
                <div className="inline-flex gap-2">
                    <img src={GiDinStemmeIconNoBg} className="w-7 h-7" />
                    <h1
                        className={`text-natt origin-left font-medium text-2xl ${
                            !open && 'scale-0'
                        }`}
                    >
                        GiDinStemme
                    </h1>
                    <ul className="pt-2">
                        <></>
                    </ul>
                </div>
            </div>
            <div className="p-12">
                <h4 className="text-xlh4 font-feteste">Dashboard</h4>
            </div>
        </div>
    );
}
