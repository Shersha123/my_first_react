import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export function AddMovie({ movieList, setMovieList }) {

    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [summary, setSummary] = useState("");
    const [rating, setRating] = useState("");
    const [trailer, setTrailer] = useState("");

    const navigate =useNavigate();
    const addMovie = () => {
        const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            Trailer: trailer,
        };
        // setMovieList([...movieList, newMovie]);
        fetch("https://63f306d8864fb1d6000db605.mockapi.io/movies", {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: { "Content-type": "application/json" },
        }).then(()=> navigate('/movies'));
    };

    return (<div className="movie-form">
        <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
        <TextField label="poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
        <TextField label="summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
        <TextField label="rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
        <TextField label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />
        {/* <input type="text" placeholder="Name"  />
        <input type="text" placeholder="poster"  />
        <input type="text" placeholder="summary"  />
        <input type="text" placeholder="rating"  /> */}


        {/* Copy Existing movieList & Add Newmovie  to it  */}

        <Button variant="contained" onClick={addMovie}>Add Movie</Button>
    </div>

    );
}
