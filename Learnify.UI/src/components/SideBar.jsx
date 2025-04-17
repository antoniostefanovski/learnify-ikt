import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logout, Dashboard, MenuBook } from '@mui/icons-material';
//import logo from '../../public/logo3.png';

export default function Sidebar() {
    const [menuItems] = useState([
        { to: "/dashboard", label: "Dashboard", icon: <Dashboard /> },
        { to: "/courses", label: "All courses", icon: <MenuBook /> },
    ]);
    const location = useLocation();

    return (
        <div className="w-1/5 h-full bg-blue-100 p-4 flex flex-col justify-between">
            <div>
                {}
                <div className="mb-8">
                    <img
                        src="/logo3.png"
                        alt="Logo"
                        className="h-10 object-contain"
                    />
                </div>

                <div className="flex flex-col gap-4 text-gray-700">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.to}
                            className={`flex items-center gap-2 cursor-pointer hover:text-blue-500 ${location.pathname === item.to ? 'text-blue-900' : 'text-gray-700'}`}
                        >
                            {item.icon} {item.label}
                        </Link>
                    ))}
                </div>
            </div>


            <Link
                to="/logout"
                className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-red-500 text-sm"
            >
                <Logout /> Log out
            </Link>
        </div>
    );
}

