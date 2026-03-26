
import Cards from './Cards';

const PlayerSingleCard = ({players, setCoin, coin={coin}}) => {

    

    return (

        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"> 
            {
                players.map( player => {
                    return (
                        <Cards player={player} setCoin={setCoin} coin={coin}></Cards>
                    )
                    })
            }
        </div>
        </>
            
    );
};

export default PlayerSingleCard;