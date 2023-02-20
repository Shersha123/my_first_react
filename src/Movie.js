import { Counter } from './Counter';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// object destructructuring 

export function Movie({ movie, id }) {

    const styles = {
        color: movie.rating > 8.5 ? "green" : "red"
    };

    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    return (
        <Card className='movie-container'>
            <img src={movie.poster} alt={movie.name} className='movie-poster'></img>
            <CardContent>
            <div className='movie-specs'>
                <h2 className='movie-name'>{movie.name}
                    <IconButton color="primary" onClick={() => setShow(!show)} aria-label="toggle summary">
                        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                    <IconButton color="primary" 
                    onClick={() => navigate(`/movies/${id}`)}aria-label="toggle summary"
                    >
                        <InfoIcon />
                    </IconButton>
                </h2>
                <p style={styles} className='movie-rating'> ⭐{movie.rating}</p>
            </div>
            {/* conditional rendering */}
            {show ? <p className='movie-summary'>{movie.summary}</p> : null}
            </CardContent>
            <CardActions>
            <Counter />
            </CardActions>
        </Card>
    );
}
