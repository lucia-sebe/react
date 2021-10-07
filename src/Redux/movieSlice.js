import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularMovies, getRecommended, getTopRated, getSimilarMovies,  getMovieDetails} from '../api/movies';

export const fetchPopularMovie = createAsyncThunk('movie/fetchPopular', async () => {
  const response = await getPopularMovies();
  return response.results;
})
export const fetchRecommendedMovie = createAsyncThunk('movie/fetchRecommended', async () => {
  const response = await getRecommended();
  return response.results;
})
export const fetchTopRatedMovie = createAsyncThunk('movie/getTopRated', async () => {
  const response = await getTopRated();
  return response.results;
})
export const fetchMovieDetails = createAsyncThunk('movie/getMovieDetails', async (movie) => {
  const response = await  getMovieDetails(movie);
  return response;
})
export const  fetchSimilarMovies= createAsyncThunk('movie/getSimilarMovies', async (movieId) => {
  const response = await getSimilarMovies(movieId);
  return response.results;
})

export const movieSlice = createSlice({
  name: 'moive',
  initialState: {
    loading: false,
    popular: [],
    recommended: [],
    topRated: [],
    backgroundImage: [],
    similarMovies: [],
    movieDetails: [],
  },
  reducers: {
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPopularMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.popular = action.payload;
      })
      .addCase(fetchRecommendedMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecommendedMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.recommended = action.payload;
      })
      .addCase(fetchTopRatedMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTopRatedMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.topRated = action.payload;
      })
      .addCase(fetchSimilarMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSimilarMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.similarMovies = action.payload;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetails = action.payload;
      })
    }
}
)

export const { setBackgroundImage } = movieSlice.actions

export default movieSlice.reducer;
