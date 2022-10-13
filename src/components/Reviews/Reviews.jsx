import { getMoviesReviews } from "Services/services"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Reviews () {
const [reviews, setReviews] = useState(null);
const { id } = useParams();

useEffect(() => {
    getMoviesReviews(Number(id)).then(response => 
        setReviews(response.data.results))
}, [id])

if(!reviews){
    return null
}


return(
    <div>

        {reviews.map(reviews => {
            return (
                
       <ul >
       <li key={reviews.id}>
       
        <h2>{reviews.author}</h2>
        <p>{reviews.content}</p>
        </li>
        </ul>
      
            )
         }) }

    </div>
    )
    }
