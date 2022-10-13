import { Routes, Route } from "react-router-dom";
import HomePages from "pages/HomePages/HomePages";
import { SharedLayout } from "./SharedLayout/SharedLayout";


import { lazy } from "react";
const Reviews = lazy(() => import('./Reviews/Reviews'))
const Movies = lazy(() => import('pages/Movies/Movies'))
const Cast = lazy(() => import('./Cast/Cast'))
const MovieList = lazy(() => import('pages/MovieList/MovieList'));


const App = () => {
  return (
      
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/home" element={<HomePages />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieList />}>
          <Route path="/movies/:id/cast" element={<Cast />} />
          <Route path="/movies/:id/reviews" element={<Reviews/>}/>
        </Route>
         </Route>
   </Routes>
 
  );
};
export default App;