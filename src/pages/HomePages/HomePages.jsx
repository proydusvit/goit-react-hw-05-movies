import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "Services/services";
import { Link, useLocation  } from "react-router-dom";

 
export default function HomePages() {
    const [trending, setTrending] = useState([]);
    const location = useLocation();

    useEffect(() => {
getMovies().then(response => {
    setTrending(response.data.results)
});
    }, [])

   
    return (
       <div>
            <ul>
                {trending.map(({id, title}) => 
                       ( <li key={id}> 
                 <Link to={`/movies/${id}`} state={{ from: location }}>
                    {title}
                    </Link>
                 </li>
                 )
               ) }
</ul>
</div>
    )

}