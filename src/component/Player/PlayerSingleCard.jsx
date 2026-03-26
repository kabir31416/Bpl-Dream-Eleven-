import React from 'react';

const PlayerSingleCard = ({player}) => {
    return (
            <div className="bg-base-100 w-full max-w-sm shadow-md border rounded-2xl">
                    <figure className="px-4 pt-4">
                        <img
                        src="https://bplt20.com.bd/images/sliders/slider-2025.jpeg"
                        className="w-full h-48 object-cover rounded-xl"
                        alt="player"
                        />
                    </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title text-lg">{player.playerName}</h2>
                    <div className="flex justify-between text-sm text-gray-500">
                    <span>{player.playerContry}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">
                        {player.playerType}
                    </span>
                    </div>

                    <hr />

                    <p className="font-semibold">{player.rating}</p>
                    <p className="text-sm text-gray-600">{player.battingStyle}</p>
                    <div className="flex justify-between mt-2">
                    <p className="font-semibold">Price: {player.price}</p>
                    <button className="btn btn-sm btn-outline">
                        Choose Player
                    </button>
                    </div>

            </div>
            </div>
    );
};

export default PlayerSingleCard;