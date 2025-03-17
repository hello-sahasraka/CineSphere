import '../css/Home.css'
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from '../services/api';




function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const loadPopularMivies = async ()=> {
            try {
                const  popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
                
            } finally {
                setLoading(false);
            }
        }

        loadPopularMivies();
    }, [])

    // const movies = [
    //     {id: 1, title: "Bohemian Rhapsody", description: "A movie about a band", url: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg"},
    //     {id: 2, title: "The Dark Knight", description: "A movie about a batman", url: "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_FMjpg_UX1000_.jpg"},
    //     {id: 2, title: "Interstellar", description: "A movie about a reality", url: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/991/158991267_b07f3e.jpg"}
    // ]

    const handleSearch = async (e)=> {
        e.preventDefault();
        
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to search movies...");
        } finally {
            setLoading(false);
        }
        setSearchQuery("");
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch}>
                <div className="search-form">
                    <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={e=> setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button">Search</button>
                </div>
            </form>


            {error && <div className="error-message">{error}</div>}

            {loading ? (<div className="loading">Loading...</div>) : (
                <div className="movies-grid">
                    {movies.map(movie=> movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={movie} key={movie.id} />)}
                </div>
            )}
            
        </div>
    )
}

export default Home;