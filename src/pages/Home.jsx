import '../css/Home.css'
import MovieCard from "../components/MovieCard";
import { useState } from "react";




function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Bohemian Rhapsody", description: "A movie about a band", url: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg"},
        {id: 2, title: "The Dark Knight", description: "A movie about a batman", url: "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_FMjpg_UX1000_.jpg"},
        {id: 2, title: "Interstellar", description: "A movie about a reality", url: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/991/158991267_b07f3e.jpg"}
    ]

    const handleSearch = (e)=> {
        e.preventDefault();
        alert(searchQuery);
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
            <div className="movies-grid">
                {movies.map(movie=> movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Home;