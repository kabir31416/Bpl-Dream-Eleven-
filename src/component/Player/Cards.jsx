import React, { useState } from 'react';
import { Flag, UserRound } from 'lucide-react';

const Cards = ({player, setCoin, coin}) => {


    const [isSelected, setIsSelected] = useState(false)

    const handleButton = () => {
        setIsSelected(true) 
        setCoin(coin - player.price)
    }

    return (
        <div className="bg-base-100  shadow-md border rounded-2xl">
                            <figure className="px-4 pt-4">
                                <img
                                src="https://bplt20.com.bd/images/sliders/slider-2025.jpeg"
                                className="w-full h-48 object-cover rounded-xl"
                                alt="player"
                                />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title text-lg"><UserRound></UserRound> {player.playerName}</h2>
                                <div className="flex justify-between text-sm text-gray-500">
                                <h3 className='flex'> <Flag></Flag> {player.playerContry}</h3>
                                <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">
                                    {player.playerType}
                                </span>
                                </div>

                                <hr />


                                <p className="font-semibold">Rating: {player.rating}</p>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span className="text-sm text-gray-600">{player.battingStyle}</span>
                                    <span className="text-sm text-gray-600">{player.bowlingStyle}</span>
                                </div>


                                <div className="flex justify-between mt-2">
                                <p className="font-semibold">Price: {player.price}</p>

                                <button 
                                onClick={handleButton} 
                                className="btn btn-sm btn-outline" disabled={isSelected ? true : false}>
                                {isSelected === false ? "Choose Player" : "Selected"}
                                </button>

                                </div>

                            </div>
                        </div>
    );
};

export default Cards;