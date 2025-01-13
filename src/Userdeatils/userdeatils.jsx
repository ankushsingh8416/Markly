import React, { useEffect, useRef, useState } from "react";
import { FiUser, FiHelpCircle, FiLogOut } from "react-icons/fi";
import { RiHandbagLine } from "react-icons/ri";
import { gsap } from "gsap";
import ScrollLink from "../ScrollLink";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const Userdeatils = ({ handleLogout, toggleProfile }) => {
    const userDetailsRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            userDetailsRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
    }, []);

    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <div
            ref={userDetailsRef}
            className="w-64 z-10 shadow-2xl absolute top-[75px] right-5 bg-white rounded-lg  p-4"
        >
            <div className="flex items-center mb-4">
                <img
                    src="./images/profile.webp"
                    alt="User Profile"
                    className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                    <h3 className="text-sm  text-gray-900 font-bold">Welcome {username}</h3>
                </div>
            </div>

            <div className="border-t border-gray-200"></div>

            <ul className="mt-4 space-y-2">
                <li className="flex items-center justify-between text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <span className="flex items-center">
                        <FiUser className="w-5 h-5 mr-2 text-gray-500" />
                        Edit Profile
                    </span>
                </li>

                <li className="flex items-center justify-between text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <ScrollLink to={"/CreateContainer"}>
                        <span className="flex items-center" onClick={toggleProfile}>
                            <FaPlus className="w-5 h-5 mr-2 text-gray-500" />
                            Add Product
                        </span>
                    </ScrollLink>
                </li>

                {/* New Manage Products Link with updated icon */}
                <li className="flex items-center justify-between text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <ScrollLink to={"/ManageProducts"}>
                        <span className="flex items-center" onClick={toggleProfile}>
                            <RiHandbagLine className="w-5 h-5 mr-2 text-gray-500" />
                            Manage Products
                        </span>
                    </ScrollLink>
                </li>



                <li
                    className="flex items-center justify-between text-red-600 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                    onClick={handleLogout}
                >
                    <span className="flex items-center">
                        <FiLogOut className="w-5 h-5 mr-2 text-red-500" />
                        Logout
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Userdeatils;
