import { getMoviesCast } from "Services/services"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Con } from "./Cast.styled";


export default function Cast () {
const [cast, setCast] = useState(null);
const { id } = useParams();

useEffect(() => {
    getMoviesCast(Number(id)).then(response => 
        setCast(response.data.cast))
}, [id])

if(!cast){
    return null
}


    return(
    <Con>

        {cast.map(cast => {
            return (
                
       <ul>
       <li key={cast.credit_id}>
        <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="" width= '150px' height= '200px' />
        <p>{cast.name}</p>
        <p>{cast.character}</p>
        </li>
        </ul>
      
            )
         }) }

    </Con>
    )
    }