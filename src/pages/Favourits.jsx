import '../css/Favorites.css'
import {useMovieContext} from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';


function Favourits() {

    const {favorites} = useMovieContext();

    if(favorites){
        return (
            <div className="favorites">
                <h2>Your favorites</h2>
                <div className="movies-grid">
                    {favorites.map(movie=> <MovieCard movie={movie} key={movie.id} />)}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No favourite movies yet</h2>
            <p>Starts adding some favourite movies and they will appear here!</p>
        </div>
    )
}

export default Favourits;
