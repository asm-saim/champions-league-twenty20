// import React from 'react';

import { use } from "react";

const AvailablePlayers = ({ fetchPlayers }) => {
    const loadPromise = use(fetchPlayers)
    console.log(loadPromise)
    return (
        <div>
            <h1>AvailablePlayers</h1>
        </div>
    );
};

export default AvailablePlayers;