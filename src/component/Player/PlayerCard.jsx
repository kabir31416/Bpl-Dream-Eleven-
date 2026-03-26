import { use, useState } from "react";
import PlayerSingleCard from "./PlayerSingleCard";
import SelectedPlayers from "./SelectedPlayers";


const PlayerCard = ({playerPromise, setCoin, coin}) => {

    const players = use(playerPromise)

    const [active, setActive] = useState("Active");


    return (
        <div className="container mx-auto px-4">

            <div className="flex justify-between py-4">
                { active === "Active" ? <h1 className="text-2xl font-bold">Abvailable Players</h1> : <h1 className="text-2xl font-bold">Selected Players (0/{players.length})</h1>}

                <div className="flex">
                    <button onClick={() => setActive("Active")} className={`tab btn tab-active ${active === "Active" ? "bg-[#e7fe29]" :""} rounded-r-none rounded-l-xl`}>Available</button>
                    
                    <button onClick={() => setActive("Selected")} className={`tab btn tab-active ${active === "Selected" ? "bg-[#e7fe29]" :""} rounded-l-none rounded-r-xl`}>Selected (0)</button>

                </div>
            </div>
            
            { active === "Active" ? <PlayerSingleCard players={players} setCoin={setCoin} coin={coin}></PlayerSingleCard> : <SelectedPlayers></SelectedPlayers> }


        </div>
    
    );
};

export default PlayerCard;