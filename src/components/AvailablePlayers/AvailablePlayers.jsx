// import React from 'react';
import { use } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ fetchPlayers, balance, setAvailableBalance,
    purchasedPlayer, setPurchasedPlayer }) => {
    const loadPromise = use(fetchPlayers)
    // console.log(loadPromise)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 my-5 ">
            {
                loadPromise.map(player => <Player balance={balance}
                    setAvailableBalance={setAvailableBalance} player={player}
                    purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer}></Player>)
            }
        </div>

    );
};

export default AvailablePlayers;