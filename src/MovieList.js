import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import { AddMovie } from "./AddMovie";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export function MovieList() {
    const [movieList, setMovieList] = useState([])
    const getMovies = () => {
        fetch("https://63f306d8864fb1d6000db605.mockapi.io/movies", {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mvs) => setMovieList(mvs));
    }
    useEffect(() => getMovies(), []);

    const deleteMovie = (id) => {
        fetch(`https://63f306d8864fb1d6000db605.mockapi.io/movies/${id}`, {
            method: "DELETE",
        }).then((data) => getMovies())
    };
    return (
        <div>
            <div className='movie-list'>
                {/*  {parents-> child (props)} */}
                {movieList.map((mv) => (
                    <div key={mv.id}>
                        <Movie
                            movie={mv}
                            id={mv.id}
                            deleteButton={
                                <IconButton 
                                sx={{marginLeft: "auto"}}
                                onClick={() => deleteMovie(mv.id)} 
                                aria-label="delete"
                                 color="error">
                                    <DeleteIcon />
                                </IconButton>
                            } />
                    </div>
                ))}
            </div>
        </div>
    );
}


