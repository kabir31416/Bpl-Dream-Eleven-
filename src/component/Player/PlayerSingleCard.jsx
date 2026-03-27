
import Cards from './Cards';

const PlayerSingleCard = ({players, setCoin, coin, setSelectedPlayer, selectedPlayer}) => {

    

    return (

        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"> 
            {
                players.map( player => {
                    return (
                        <Cards key={player.playerName} player={player} setCoin={setCoin} coin={coin} setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer}></Cards>
                    )
                    })
            }
        </div>
        </>
            
    );
};

export default PlayerSingleCard;