import profilePc from '../../assets/profile-picture.png'
import flag from '../../assets/flag.png'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Player = ({ player, setAvailableBalance, balance, purchasedPlayer, setPurchasedPlayer }) => {
    const [isSelected, setSelected] = useState(false)

    // balance Calculation:
    const handleSelected = (player) => {
        const playerPrice = parseInt(player.price.split('USD').join("").split(',').join(""))
        if (balance < playerPrice) {
            toast.error("Insufficient coins to proceed.", { theme: 'dark' });
            return;
        }
        if (purchasedPlayer.length === 6) {
            toast.error("6 players are already selected", { theme: 'dark' });
            return;
        }
        setSelected(true)
        setAvailableBalance(balance - playerPrice)
        setPurchasedPlayer([...purchasedPlayer, player])
        toast.success("Player Selected!", {theme:'dark'})
    }

    return (
        <div className="card bg-base-100 shadow-sm p-5 bg-gray-700">
            <figure className="rounded-xl">
                <img className='h-55 w-full object-cover'
                    src={player.playerImage} />
            </figure>
            <div>
                <div className="flex items-center gap-2 my-5">
                    <img className="h-7 w-7" src={profilePc} alt="" />
                    <h2 className="card-title font-bold">{player.playerName}</h2>
                </div>
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-500">
                    <div className="flex items-center gap-2">
                        <img className="w-7 h-7" src={flag} alt="" />
                        <span className="font-semibold text-gray-200">{player.origin}</span>
                    </div>
                    <p className="py-1 px-2 rounded-lg text-sm font-semibold bg-orange-100 border-none text-black">{player.role}</p>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold">Rating</span>
                    <span className="font-semibold">{player.rating}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Batting Style</span>
                    <span className="font-semibold">{player.battingStyle}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-semibold">Price: $<span>{player.price}</span></span>
                    <button disabled={isSelected} onClick={() => handleSelected(player)}
                        className={` border-none text-black btn font-bold text-base 
                    ${isSelected ? "bg-orange-100" : "bg-orange-500"}`}>
                        {isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>

            </div>
        </div>
    );
};

export default Player;