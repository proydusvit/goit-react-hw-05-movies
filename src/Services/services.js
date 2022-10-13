const axios = require('axios').default;


 const API_KEY = '63abd2c5a0de8c85380fc730010d0eb0';
 const URL = 'https://api.themoviedb.org/3/';

export const getMovies = async () => {
  try {
    const response = await axios.get(`${URL}trending/movie/week?api_key=${API_KEY}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  return console.error(error.message);
  }
};

export const getSearch = async (query) => {
  try {
    const response = await axios.get(`${URL}search/movie?api_key=${API_KEY}&query=${query}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
     return console.error(error.message);
  }
};
export const getMoviesDetalis = async (id) => {
  try {
    const response = await axios.get(`${URL}/movie/${id}?api_key=${API_KEY}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  return console.error(error.message);
  }
};

export const getMoviesReviews = async (id) => {
  try {
    const response = await axios.get(`${URL}/movie/${id}/reviews?api_key=${API_KEY}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  return console.error(error.message);
  }
};

export const getMoviesCast = async (id) => {
  try {
    const response = await axios.get(`${URL}/movie/${id}/credits?api_key=${API_KEY}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  return console.error(error.message);
  }
};