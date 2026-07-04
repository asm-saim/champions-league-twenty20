import deleteImg from '../../assets/delete.png'

const SelectedCards = ({ player, removeCart }) => {

    const handleRemove = () => {
        removeCart(player)
    }
    // console.log(player)
    return (
        <div className=" border border-gray-500 p-3 rounded-xl my-5 flex justify-between items-center">
            <div className='flex items-center gap-3'>
                <img className="w-18 h-18 object-cover rounded-xl" src={player.playerImage} alt="" />
                <div>
                    <h2 className="font-bold text-lg">{player.playerName}</h2>
                    <p className="font-medium text-sm text-gray-400">{player.battingStyle}</p>
                </div>

            </div>
            <div onClick={handleRemove} className='mr-5'><img src={deleteImg} alt="" /></div>

        </div>
    );
};

export default SelectedCards;