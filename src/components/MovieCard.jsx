
function MovieCard({movie}) {

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} style={{height: "250px", objectFit: "cover"}}/>
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={()=> {
                        alert("Added to favourites");
                    }}>&hearts;</button>
                </div>
            </div>
            <div className="content">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
            </div>
        </div>
    )

}

export default MovieCard;