import { use, useState } from "react";
import PlayerSingleCard from "./PlayerSingleCard";
import SelectedPlayers from "./SelectedPlayers";


const PlayerCard = ({playerPromise, setCoin, coin}) => {

    const players = use(playerPromise)

    const [active, setActive] = useState("Active");

    const [selectedPlayer, setSelectedPlayer] = useState([]);


    return (
        <div className="container mx-auto px-4">

            <div className="flex justify-between py-4">
                { active === "Active" ? <h1 className="text-2xl font-bold">Abvailable Players</h1> : <h1 className="text-2xl font-bold">Selected Players ({selectedPlayer.length}/{players.length})</h1>}

                <div className="flex">
                    <button onClick={() => setActive("Active")} className={`tab btn tab-active ${active === "Active" ? "bg-[#e7fe29]" :""} rounded-r-none rounded-l-xl`}>Available</button>
                    
                    <button onClick={() => setActive("Selected")} className={`tab btn tab-active ${active === "Selected" ? "bg-[#e7fe29]" :""} rounded-l-none rounded-r-xl`}>Selected ({selectedPlayer.length})</button>

                </div>
            </div>
            
            { active === "Active" ? 
            <PlayerSingleCard players={players} setCoin={setCoin} coin={coin} setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} ></PlayerSingleCard> 
            : 
            <SelectedPlayers selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coin={coin} setCoin={setCoin}></SelectedPlayers> }


        </div>
    
    );
};

export default PlayerCard;