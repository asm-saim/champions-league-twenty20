// import React from 'react';
import navImg from '../../assets/logo.png'
import coin from '../../assets/dollar.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
            <div className="navbar-start">
                <a>
                    <img className='w-15 h-15' src={navImg} alt="" />
                </a>
            </div>
            <div className="navbar-center">
                <h2 className='font-bold text-3xl text-orange-500'>Big Bash League — Build Your Dream 11</h2>
            </div>
            <div className="navbar-end flex items-center gap-3 ">
                <span>600000000 Coin</span>
                <span><img className='w-7 h-7' src={coin} alt="" /></span>
            </div>
        </div>
    );
};

export default Navbar;