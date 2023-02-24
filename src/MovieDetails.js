import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState,useEffect } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export function MovieDetails() {
    const { id } = useParams();
    // const movie = movieList[id];
     const [movie, setMovie] = useState([])
    useEffect(() => {
        fetch(`https://63f306d8864fb1d6000db605.mockapi.io/movies/${id}`,{
          method:"GET",
        })
          .then((data) => data.json())
          .then((mvs) => setMovie(mvs));
      }, [])
    const styles = {
        color: movie.rating > 8.5 ? "green" : "red"
    };

    const navigate = useNavigate;

    return (
        <div>
            <iframe
                width="100%"
                height="680"
                src={movie.trailer}
                title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            {/* <h1>Movie detail page...{movie.name}</h1> */}
            <div className='movie-detail-container'>
                <div className='movie-specs'>
                    <h2 className='movie-name'>{movie.name}
                    </h2>
                    <p style={styles} className='movie-rating'>⭐{movie.rating} </p>
                </div>
                <p className='movie-summary'>{movie.summary}</p>
                <Button startIcon={<KeyboardBackspaceIcon />} variant="contained" onClick={() => navigate(-1)}>Back</Button>
            </div>
        </div>
    );
}
