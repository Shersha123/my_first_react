import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import { AddMovie } from "./AddMovie";

export function MovieList() {
    const [movieList, setMovieList] = useState([])
    const getMovies =()=>{
        fetch("https://63f306d8864fb1d6000db605.mockapi.io/movies", {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mvs) => setMovieList(mvs));
    }
    useEffect(() => getMovies(), []);

    const deleteMovie = (id) =>{
        fetch(`https://63f306d8864fb1d6000db605.mockapi.io/movies/${id}`, {
            method: "DELETE",
        }) .then((data) => getMovies())
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
                            deleteButton={<button onClick={() => deleteMovie(mv.id)}>Delete Me</button>} />
                    </div>
                ))}
            </div>
        </div>
    );
}


