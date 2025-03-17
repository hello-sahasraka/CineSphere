import {createContext, useState, useContext, useEffect} from 'react'

export const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext); 

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);
    

    useEffect(()=> {

        const storedFavs = localStorage.getItem('favorites');

        if(storedFavs){
            setFavorites(JSON.parse(storedFavs));
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])
    
}


