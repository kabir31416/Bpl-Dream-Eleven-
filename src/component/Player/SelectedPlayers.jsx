import { Trash } from 'lucide-react';
import React from 'react';

const SelectedPlayers = ({selectedPlayer, setSelectedPlayer, setCoin, coin}) => {
    console.log(selectedPlayer, "selectedPlayer")


    const handleDelet = (player) => {
        const remainPlayer = selectedPlayer.filter(splayer => splayer.playerName !== player.playerName);
        setSelectedPlayer(remainPlayer);

        setCoin(coin + player.price);
    }


    return (
        <div>
            {
            selectedPlayer.map((player, index) => {

                return <div key={player.playerName || index} className='flex justify-between items-center p-4 border border-gray-400 rounded-xl m-2'>
                    <div className='flex gap-3'>
                        <img
                                src="https://bplt20.com.bd/images/sliders/slider-2025.jpeg"
                                className="w-24 h-15 rounded-xl"
                                alt="player"
                                />
                        
                        <div>
                            <h1 className='text-2xl font-bold'>{player.playerName}</h1>
                            <h3>{player.battingStyle} | {player.bowlingStyle}</h3>
                        </div>
                    </div>

                    <button onClick={() => handleDelet(player)} className='btn'><Trash color="red"></Trash></button>
                </div>

            }

            )}
        </div>
    );
};

export default SelectedPlayers;