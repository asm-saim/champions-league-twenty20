// import React from 'react';

import SelectedCards from "../SelectedCards/SelectedCards";

const SelectedPlayers = ({ purchasedPlayer, removeCart }) => {
    // console.log("hello from selected section", purchasedPlayer)
    return (
        <div>
            {
                purchasedPlayer.map(player => <SelectedCards removeCart={removeCart} player={player}></SelectedCards>)
            }
        </div>
    );
};

export default SelectedPlayers;