// import React from 'react';
import { use } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ fetchPlayers }) => {
    const loadPromise = use(fetchPlayers)
    console.log(loadPromise)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 my-5 ">
            {
                loadPromise.map(player => <Player player={player}></Player>)
            }
        </div>

    );
};

export default AvailablePlayers;