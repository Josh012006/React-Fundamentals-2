import Player from "./Player";
import players from "./players";


function PlayerList() {
    const tab = players.map(j => {
        return <Player Name = {JSON.parse(j).name} Team = {JSON.parse(j).team} Nationality = {JSON.parse(j).nationality} 
        JerseyNumber = {JSON.parse(j).jerseyNumber} Age = {JSON.parse(j).age} ImageURL = {JSON.parse(j).imageURL} key = {JSON.parse(j).name}></Player>;
    });

    return (
        <div className="row align-items-center">
            {tab}
        </div>
    )
}

export default PlayerList;