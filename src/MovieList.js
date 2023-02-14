import { Movie } from "./Movie";
import { useState } from "react";
import { AddMovie } from "./AddMovie";

export function MovieList({movieList }) {
    return (
        <div>    
            <div className='movie-list'>
                {/*  {parents-> child (props)} */}
                {movieList.map((mv ,index)=>(
                    <div key={index}>
                        <Movie movie={mv} id={index}/>
                    </div>
                ))}
            </div>
        </div>
    );
}


