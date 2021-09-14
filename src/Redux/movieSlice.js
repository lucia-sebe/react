import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularMovies, getRecommended, getTopRated} from '../api/movies';

export const fetchPopularMovie = createAsyncThunk('movie/fetchPopular', async ()=>{
    const response = await getPopularMovies();
    return response.results;
})
export const fetchRecommendedMovie = createAsyncThunk('movie/fetchRecommended', async ()=>{
    const response = await getRecommended();
    return response.results;
})
export const fetchTopRatedMovie = createAsyncThunk('movie/getTopRated', async ()=>{
    const response = await getTopRated();
    return response.results;
})


export const movieSlice = createSlice({
    name: 'moive',
    initialState: {
      loading: false,
      popular: [],
      recommended:[],
      topRated: [],
      backgroundImage: [],
    },
    reducers: {
        setBackgroundImage: (state, action) => {
            state.backgroundImage = action.payload;
        }
    },
    extraReducers: builder =>{ 
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
       }
    }
  )
  
  export const  { setBackgroundImage } = movieSlice.actions
  
  export default movieSlice.reducer;
  