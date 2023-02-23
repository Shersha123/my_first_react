
import './App.css';
import { User } from './User';
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { AddMovie } from './AddMovie';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


function App() {

  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate()
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    fetch("https://63f306d8864fb1d6000db605.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={4} >
        <div className='App'>
          {/* <MovieList /> */}
          {/* <AddColor />  */}
          {/* <Add5 /> */}
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>Movies</Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>AddMovie</Button>
              <Button color="inherit" onClick={() => navigate("/color-game")}>AddColor</Button>
              <Button
                startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>
          {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/movies/add">Add Movie</Link></li>
        <li><Link to="/color-game">AddColor</Link></li>
      </ul> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList movieList={movieList} />} />
            <Route path="/color-game" element={<AddColor />} />
            <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
            {/* /movies->movieList */}
            {/* /coloe-game->AddColor */}
            {/* variable (matches any movieid) id */}
            <Route path="/movies/:id" element={<MovieDetails movieList={movieList} />} />
          </Routes>
        </div>
      </Paper >
    </ThemeProvider>
  );
}
function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  const styles = {
    color: movie.rating > 8.5 ? "green" : "red"
  };

  const navigate = useNavigate

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
        <Button startIcon={< KeyboardBackspaceIcon />} variant="contained" onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );
}
function Home() {
  return (
    <h1>Welcome to the movie App 💕</h1>
  )
}

function Add5() {
  let [num, setNum] = useState(0)
  return (
    <div>
      <button onClick={() => setNum(num + 5)}>+5</button>
      <p>{num}</p>
    </div>

  )
}

export default App;
