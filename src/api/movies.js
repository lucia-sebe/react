export const getAllMovies = fetch('https://api.themoviedb.org/3/movie/popular?api_key=715b3c6bbd6ab40e34894c211f5e1bef')
    .then((response) => {
        return response.json()
    })