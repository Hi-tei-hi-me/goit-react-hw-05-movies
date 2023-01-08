import axios from 'axios';

const TMDB_KEY = 'e5b8bd1b82d4f5b68280cf1e2b92e5f6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingFilmsList = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/week?api_key=${TMDB_KEY}`);
  return results.map(({ title, id }) => ({ title, id }));
};
export const getMovieByTextQuery = async textQuery => {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=${TMDB_KEY}&query=${textQuery}&page=1`);
  return results.map(({ title, id }) => ({ title, id }));
};
export const getMovieInfoById = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${TMDB_KEY}`);
  const { poster_path, title, release_date, vote_average, overview, genres } = data;
  return { poster_path, title, release_date, vote_average, overview, genres };
};
export const getMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${TMDB_KEY}`);
  return data.cast.map(({ profile_path, name, character }) => ({
    profile_path,
    name,
    character,
  }));
};
export const getMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${TMDB_KEY}&page=1`);
  return data.results.map(({ author, content }) => ({ author, content }));
};
