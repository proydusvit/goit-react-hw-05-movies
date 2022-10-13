import {   Link, useLocation, useParams ,  Outlet} from "react-router-dom";
import { Container, CardWrapper } from "./MovieList.styled";
import { getMoviesDetalis } from "Services/services";
import {Suspense, useState, useEffect } from "react";
import { MovieDetalis } from "components/MovieDetalis/MovieDetalis.jsx";
import { BackLink } from "components/BackLink/BackLink";



 const MovieList = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    const { id } = useParams();
    const [movie, setMovie] =  useState(null);

    
    useEffect(() => {
        getMoviesDetalis(Number(id)).then(response => 
            setMovie(response.data))
    }, [id])

    if(!movie){
        return null
    }
    

  
    return (
        <Container>
             <CardWrapper>
            <BackLink to={backLinkHref}>BacK</BackLink>
           
            <MovieDetalis movie={movie}/>
           
                
                <ul>
                    <li>
              <Link  to="cast" state={{backLinkHref}}> Cast </Link>
              </li>
              <li>
              <Link  to="reviews" state={{backLinkHref}}> reviews </Link>
              </li>
              </ul>
               
                <Suspense>
                <Outlet />
                </Suspense>
                </CardWrapper>
        </Container>


    )

}
export default MovieList