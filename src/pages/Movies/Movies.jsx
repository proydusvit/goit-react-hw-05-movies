import { SearchBox } from "components/SearchBox/SearchBox.jsx"
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getSearch } from "Services/services";
import { useState } from "react";
import { Link, useLocation, Outlet  } from "react-router-dom";

const Movies = () => {
    const [movie, setMovie] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("query") ?? "";
    const location = useLocation();

    useEffect(() => {
        if (!name) {
            setMovie(null);
            return;
        }

         getSearch(name).then(response => 
            setMovie(response.data.results)

         )
       
    }, [name]);

    const onSearch = (value) => {
        setSearchParams(value !== '' ? {query: value} : {})
        
    }
    if (!movie) {
        return (
    <div>
            <Outlet />
            <SearchBox sendSearchName={onSearch} />
            </div>
        );
      }
    return (
        <div>
              <Outlet/> 
            <SearchBox  sendSearchName={onSearch}/>
            <ul> {movie.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
               </div>
    )

}
export default Movies;