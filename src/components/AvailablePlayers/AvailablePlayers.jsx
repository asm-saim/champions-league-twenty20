// import React from 'react';
import { use } from "react";
import profilePc from '../../assets/profile-picture.png'
import flag from '../../assets/flag.png'

const AvailablePlayers = ({ fetchPlayers }) => {
    const loadPromise = use(fetchPlayers)
    console.log(loadPromise)
    return (
        <div class="card bg-base-100 w-96 shadow-sm p-5">
            <figure className="rounded-xl">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="players" />
            </figure>
            <div class="">
                <div className="flex items-center gap-2 my-5">
                    <img className="h-7 w-7" src={profilePc} alt="" />
                    <h2 class="card-title font-bold">Virat Kohi</h2>
                </div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-300">
                    <div className="flex items-center gap-2">
                        <img className="w-7 h-7" src={flag} alt="" />
                        <span className="font-semibold text-gray-500">India</span>
                    </div>
                    <button className="btn btn-sm text-gray-500">All-Rounder</button>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Rating</span>
                    <span className="font-semibold text-gray-700">8</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Batting Style</span>
                    <span className="font-semibold text-gray-500">Left-hand-bat</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-semibold">Price: $<span>15000000</span></span>
                    <button className="btn btn-sm text-gray-500">Choose Player</button>
                </div>
                
            </div>
        </div>
    );
};

export default AvailablePlayers;