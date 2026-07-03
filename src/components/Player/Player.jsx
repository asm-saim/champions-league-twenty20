import profilePc from '../../assets/profile-picture.png'
import flag from '../../assets/flag.png'

const Player = ({ player }) => {
    return (
        <div class="card bg-base-100 shadow-sm p-5 bg-white">
            <figure className="rounded-xl">
                <img className='h-55 w-full object-cover'
                    src={player.playerImage} />
            </figure>
            <div class="">
                <div className="flex items-center gap-2 my-5">
                    <img className="h-7 w-7" src={profilePc} alt="" />
                    <h2 class="card-title font-bold text-black">{player.playerName}</h2>
                </div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-500">
                    <div className="flex items-center gap-2">
                        <img className="w-7 h-7" src={flag} alt="" />
                        <span className="font-semibold text-gray-700">{player.origin}</span>
                    </div>
                    <p className="py-1 px-2 rounded-lg text-sm bg-orange-100 border-none text-black">{player.role}</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">Rating</span>
                    <span className="font-semibold text-gray-700">{player.rating}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">Batting Style</span>
                    <span className="font-semibold text-gray-700">{player.battingStyle}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-black">Price: $<span>{player.price}</span></span>
                    <button className="btn font-bold bg-orange-500 border-none text-black">Choose Player</button>
                </div>

            </div>
        </div>
    );
};

export default Player;