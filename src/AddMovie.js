import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {

    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [summary, setSummary] = useState("");
    const [rating, setRating] = useState("");

    const addMovie = () => {
        const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
        };
        setMovieList([...movieList, newMovie]);
    };

    return (<div className="movie-form">
        <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
        <TextField label="poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
        <TextField label="summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
        <TextField label="rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
        {/* <input type="text" placeholder="Name"  />
        <input type="text" placeholder="poster"  />
        <input type="text" placeholder="summary"  />
        <input type="text" placeholder="rating"  /> */}


        {/* Copy Existing movieList & Add Newmovie  to it  */}

        <Button variant="contained" onClick={addMovie}>Add Movie</Button>
    </div>

    );
}
