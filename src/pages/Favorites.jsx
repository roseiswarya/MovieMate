import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"



function Favorites() {
    const {favorites} = useMovieContext();
    
    if(favorites) {
        return<div className="movies-grid">
            {favorites.map(
                (movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    }
    
    return <div className="favorite-empty">
        <h2>No Favorite Movies Added Yet!</h2>
        <p>Start adding your favorite movies to keep track of them</p>
    </div>
    
}

export default Favorites