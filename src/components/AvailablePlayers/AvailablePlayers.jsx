// import React from 'react';
import { use } from "react";
import profilePc from '../../assets/profile-picture.png'

const AvailablePlayers = ({ fetchPlayers }) => {
    const loadPromise = use(fetchPlayers)
    console.log(loadPromise)
    return (
        <div class="card bg-base-100 w-96 shadow-sm p-5">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div class="">
                <div className="flex items-center gap-3 my-5">
                    <img className="h-7 w-7" src={profilePc} alt="" />
                    <h2 class="card-title">Virat Kohi</h2>
                </div>

                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;