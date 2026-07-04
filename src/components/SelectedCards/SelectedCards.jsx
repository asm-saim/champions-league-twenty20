const SelectedCards = ({ player }) => {
    console.log(player)
    return (
        <div className=" border border-gray-500 p-3 rounded-xl my-5 flex justify-between items-center">
            <div>
                <img className="w-18 h-18 object-cover rounded-xl" src={player.playerImage} alt="" />
                <h2 className="font-bold text-lg mt-1">{player.playerName}</h2>
                <p className="font-medium text-sm text-gray-400">{player.battingStyle}</p>
            </div>
            <div>img</div>

        </div>
    );
};

export default SelectedCards;