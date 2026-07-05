// import React from 'react';
import navImg from '../../assets/logo.png'
import coin from '../../assets/dollar.png'

const Navbar = ({ balance }) => {
    return (
        <div className="navbar bg-gray-700 shadow-sm px-4 sm:px-6 md:px-9 flex flex-col md:flex-row gap-4 md:gap-0">

            <div className="navbar-start justify-center md:justify-start">
                <img className="w-10 h-10 md:w-14 md:h-14" src={navImg} alt="Logo" />
            </div>

            <div className="navbar-center">
                <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white">
                    Build Your Dream Team
                </h2>
            </div>

            <div className="navbar-end justify-center md:justify-end">
                <div className="flex items-center gap-2 bg-gray-600 px-3 py-2 rounded-lg">
                    <span className="font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
                        ${balance} Coins
                    </span>
                    <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" src={coin} alt="Coin" />
                </div>
            </div>

        </div>
    );
};

export default Navbar;
