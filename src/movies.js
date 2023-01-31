import "./movies.css";

import { ColorBox } from "./ColorBox";
import { ColorList } from "./ColorBox";
import { useState, useEffect } from "react";
import MovieDetails from "./components/movies/MovieDetails";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Badge from "@mui/material/Badge";

import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import MovieIcon from "@mui/icons-material/Movie";

import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import {
  Routes,
  Route,
  Link as a,
  useNavigate,
  useParams,
} from "react-router-dom";

import TaskTracker from "./TaskTracker";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Movies() {
  const navigate = useNavigate();
  const [dTheme, setTheme] = useState(true);

  let theme = createTheme(
    {
      palette: {
        mode: `${dTheme ? "light" : "dark"}`,
      },
    },
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ minHeight: "100vh" }} elevation={4}>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Button onClick={() => navigate("/")} color="inherit">
                  Home
                </Button>
                <Button onClick={() => navigate("/movies")} color="inherit">
                  Movies
                </Button>
                <Button
                  onClick={() => navigate("/colorlist")}
                  color="inherit"
                >
                  Color Box
                </Button>
                <Button onClick={() => navigate("/task")} color="inherit">
                  Daily Tasks
                </Button>
                <Button
                  onClick={() => navigate("/movies/:id")}
                  color="inherit"
                >
                  Details
                </Button>

                <Button
                  startIcon={dTheme ? <DarkModeIcon /> : <LightModeIcon />}
                  style={{ marginLeft: "auto" }}
                  aria-label={dTheme ? "light" : "dark"}
                  onClick={() => setTheme(!dTheme)}
                  color="inherit"
                >
                  {dTheme ? "Dark" : "Light"} mode
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <br />
          {/* <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/moviedetails">details</a>
        </li>
          <li>
          <a href="/colorlist">Color list</a>
        </li>
        <li>
          <a href="/movies">movies</a>
        </li>

        <li>
          <a href="/task">Daily Tasks</a>
        </li>
      </ul> */}

          <Routes>
            <Route exact path="/" element={ <Welcome />} />
            <Route path="/movies/" element={ <MovieList /> }  /> 
            <Route path="/moviedetails" element={ <MovieDetails />} />
            <Route path="/movies/:id" element={ <MovieDetails />} /> 
            <Route path="/colorlist" element={ <ColorList />} />
            <Route path="/task/*" element={ <TaskTracker />} />
            <Route path="*/*" element={ <NotFound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

// Welcome componet
function Welcome() {
  return <h1> Welcome Home</h1>;
}

// 404: not found
function NotFound() {
  return (
    <img src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png"></img>
  );
}

// Add movie list

function MovieList() {
  const [mname, setName] = useState(" ");
  const [poster, setPoster] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [summary, setSummary] = useState(" ");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const urlMovies = `https://63ad96993e465169165e7345.mockapi.io/movies`;
  // Fetch the data from mock api
  useEffect(() => {
    
    fetch(urlMovies)
      .then((data) => data.json())
      .then((mve) => setMovies(mve))
      .catch((error) => console.log(error));
  }, []);

  let newMovie = { poster, mname, rating, summary };



  return (
    <div>
      <Card className="Card">
        <form className="addMovies">
          <h2>ADD MOVIE DETAILS</h2>
          <TextField
            label="Movie Name"
            variant="standard"
            onChange={(event) => setName(event.target.value)}
            value={mname}
          />
          <TextField
            label="Movie Poster url"
            variant="standard"
            onChange={(event) => setPoster(event.target.value)}
            value={poster}
          />
          <TextField
            id="outlined-basic"
            label="IMDB rating"
            variant="standard"
            onChange={(event) => setRating(event.target.value)}
            value={rating}
          />
          <TextField
            id="filled-multiline-static"
            label="Summary"
            multiline
            rows={3}
            defaultValue=""
            variant="standard"
            onChange={(event) => setSummary(event.target.value)}
            value={summary}
          />
          <Button
            variant="contained"
            onClick={() => {
                // Add movie to api by fetch
  fetch(urlMovies,{
    method : "POST",
    body : JSON.stringify(newMovie),
    headers : {
      "Content-Type" :  "application/json"
    },
  })
  .then(() => navigate("/movies"))
             
              setMovies([...movies, newMovie]);
              setName("");
              setPoster("");
              setRating("");
              setSummary("");
            }}
          >
            <b>Add</b> <MovieIcon />
          </Button>
        </form>
        <img
          className="movies"
          src="https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo="
        />
      </Card>

      <div className="movie-list">
        {/* <AddMovies movies = {mv/> */}
        {movies.map((mv, index) => (
          <Movielist
            key={index}
            poster={mv.poster}
            mname={mv.mname}
            summary={mv.summary}
            rating={mv.rating}
            id={mv.id}
            setMovies={setMovies}
            movies={movies}
            trailer = {mv.trailer}
          />
        ))}
      </div>
    </div>
  );
}

function Movielist(movies, setMovies) {
  // const id = movies.id;
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const deleteMovie = ({ movies, id, setMovies }) => {
        const urlMovies = `https://63ad96993e465169165e7345.mockapi.io/movies/${id}`;
        // console.log(id);
        fetch(urlMovies,
           {
          method : "DELETE",
        })
          .then(() => setMovies())
    
    // const remainingMovies = movies.filter((mv, index) => index !== id);
    // setMovies(remainingMovies);
  };

  return (
    <Card>
      <div className="movie-container">
        <img className="movie-poster" src={movies.poster} />
        <CardContent>
          <div className="movie-spec">
            <h3 className="mname">
              {movies.mname}
              <IconButton
                color="primary"
                aria-label="movie-details"
                onClick={() =>{
                    navigate(`/movies/${movies.id}`)
                } }
              >
                <InfoIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label={show ? "Hide" : "Show"}
                onClick={() => setShow(!show)}
              >
                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </h3>

            <p className="rating">
              <b>IMDB: ⭐{movies.rating}</b>
            </p>
          </div>

          {/* <Button variant="contained" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"} Description
          </Button> */}

          {/* Conditional Rendering */}
          {show ? <p className="summary">{movies.summary}</p> : ""}
          <CardActions>
            <Counter />
            <IconButton
              color="error"
              aria-label="Delete Item"
              onClick={() => deleteMovie(movies, setMovies)}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}

// hook - if it is a hook (function), it will start with "use";
function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const styles = { margin: "10px 0px" };
  // Initial Value for like
  // setLike is the function that will help to update like
  return (
    <div>
      <ButtonGroup
        style={styles}
        variant="outlined"
        aria-label="outlined button group"
      >
        <Button onClick={() => setLike(like + 1)}>
          <ThumbUpIcon />
        </Button>
        <Badge badgeContent={like} color="success"></Badge>
        <Button onClick={() => setDislike(dislike + 1)}>
          <ThumbDownIcon />
        </Button>
        <Badge badgeContent={dislike} color="error"></Badge>
      </ButtonGroup>
    </div>
  );
}

export default Movies;
