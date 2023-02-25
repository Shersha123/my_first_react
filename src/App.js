
import './App.css';
import { User } from './User';
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { AddMovie } from './AddMovie';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from './MovieDetails';
import { BasicForm } from './BasicForm';


function App() {



  const [movieList, setMovieList] = useState();
  const navigate = useNavigate()
  const [mode, setMode] = useState('dark')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });



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
                sx={{ marginLeft: "auto" }}
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
            <Route path="/movies/add" element={
              <AddMovie movieList={movieList} setMovieList={setMovieList} />
            } />
            {/* /movies->movieList */}
            {/* /coloe-game->AddColor */}
            {/* variable (matches any movieid) id */}
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/basic-form" element={<BasicForm />} />
          </Routes>
        </div>
      </Paper >
    </ThemeProvider>
  );
}
function Home() {
  return (
    <h1>Welcome to the movie App 💕</h1>
  )
}

// function Add5() {
//   let [num, setNum] = useState(0)
//   return (
//     <div>
//       <button onClick={() => setNum(num + 5)}>+5</button>
//       <p>{num}</p>
//     </div>

//   )
// }

export default App;

