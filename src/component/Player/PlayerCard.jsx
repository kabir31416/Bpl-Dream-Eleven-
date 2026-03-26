import { use } from "react";
import PlayerSingleCard from "./PlayerSingleCard";


const PlayerCard = ({playerPromise}) => {

    const playersData = use(playerPromise)


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            
            {
                playersData.map( player => <PlayerSingleCard player={player} ></PlayerSingleCard>)
            }
        </div>
    
    );
};

export default PlayerCard;