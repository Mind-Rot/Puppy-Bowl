import { useState, useEffect } from "react";
import { fetchPlayerById, deletePuppyById } from "../API";
import { useParams, useNavigate } from "react-router-dom";

function SinglePlayer() {
    const { id } = useParams();
    const navigate = useNavigate();

const [player, setPlayer] = useState({});

    useEffect(() => {
       async function getSinglePlayer(){
        const player = await fetchPlayerById(id)
        setPlayer(player)
       } 
       getSinglePlayer();
    }, []);
    
    return (
  <div>
     <img 
        style={{
           height: '200px'
      }} 
      src={player.imageUrl}
     />
     <h4>{player.name}</h4>
     <button
     onClick={async ()=>{
        await deletePuppyById(player.id)
        navigate(`/`);
     }} 
     >
        Delete Puppy
     </button>
    </div>
    );
}

export default SinglePlayer