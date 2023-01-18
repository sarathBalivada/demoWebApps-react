import logo from "./logo.svg";
import "./App.css";
import { ColorBox } from "./ColorBox";
import { ColorList } from "./ColorBox";
import { useState } from "react";
import SvgIcon from "@mui/material/SvgIcon";
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

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import MovieIcon from '@mui/icons-material/Movie';

function Movies() {
  return (
    <div className="Movies">
      <MovieList />
      {/* <ColorList /> */}
    </div>
  );
}



// Add movie list


function MovieList() {
  const initial_movies = [
    {
      poster:
        "https://imageio.forbes.com/specials-images/imageserve/6244301dbcea8044ecc7b3b0/A-poster-of-SS-Rajamouli-s--RRR--/0x0.jpg?format=jpg&crop=2471,1852,x0,y330,safe&width=960",
      mname: "RRR",
      summary:
        "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
      rating: "7.9/10",
    },
    {
      poster:
        "https://feeds.abplive.com/onecms/images/uploaded-images/2021/07/10/273e787ba809e725948334340c658e68_original.jpg",
      mname: "VIKRAM",
      summary:
        "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.",
      rating: "8.3",
    },
    {
      poster:
        "https://media5.bollywoodhungama.in/wp-content/uploads/2017/03/Bahubali-2-The-Conclusion.jpg",
      mname: "BAHUBALI-2",
      summary:
        "After learning that his father was brutally killed by Bhallaladeva, Mahendra Baahubali raises an army to defeat him and release his mother from the former's captivity.",
      rating: "8.2",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
      mname: "AVATAR-2",
      summary:
        "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
      rating: "7.9",
    },
    {
      poster: "https://m.media-amazon.com/images/I/71o1aRN1FJL._SL1100_.jpg",
      mname: "FIGHT CLUB",
      summary: `Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.
      `,
      rating: "8.8",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjE3NTgzNDg1Ml5BMl5BanBnXkFtZTYwODE4Mjg4._V1_.jpg",
      mname: `BEFORE SUNRISE`,
      summary: `While travelling on a train in Europe, Jesse, an American man, meets Celine, a French woman. On his last day in Europe before returning to the US, he decides to spend his remaining hours with her.`,
      rating: "8.1",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BNTYxYzIyZmYtMjAxMi00MWU2LWFiYTgtM2VlMjQ1YmYyYTcwXkEyXkFqcGdeQXVyMjk5MDYzMDA@._V1_.jpg",
      mname: `E NAGARANIKI EMAINDHI`,
      summary: `Childhood friends Vivek, Karthik, Kaushik, and Uppi hope for careers in film-making during university but eventually give up and settle into other jobs. To earn money for a wedding, they enter Goa Short film festival and rekindle their dream.
      `,
      rating: "7.9",
    },
  ];
  const [mname, setName] = useState(" ");
  const [poster, setPoster] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [summary, setSummary] = useState(" ");
  const [movies, setMovies] = useState(initial_movies);

  return (
    <div>
      <Card className = "Card">
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
              let newMovie = { poster, mname, rating, summary };
              setMovies([...movies, newMovie]);
              setName("");
              setPoster("");
              setRating("");
              setSummary("");
            }}
          >
           <b>Add</b>  <MovieIcon />
          </Button>
        </form>
        <img className="movies" src= 'https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo=' />
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
          />
        ))}
      </div>
    </div>
  );
}

function Movielist({ poster, mname, summary, rating }) {
  const [show, setShow] = useState(true);

  // Conditional Styling
  // const styles = {display: show? "block" : "none"}
  return (
    <Card>
      <div className="movie-container">
        <img className="movie-poster" src={poster} />
        <CardContent>
          <div className="movie-spec">
            <h3 className="mname">{mname}
            <IconButton color="primary" aria-label={show ? "Hide" : "Show"} onClick={() => setShow(!show)}>
          {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}  
          </IconButton>
          </h3>
           
            <p className="rating">
              <b>IMDB: ⭐{rating}</b>
            </p>
          </div>
         
          {/* <Button variant="contained" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"} Description
          </Button> */}

          {/* Conditional Rendering */}
          {show ? <p className="summary">{summary}</p> : ""}
          <CardActions>
            <Counter />
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
        <Button onClick={() => setLike(like + 1)}><ThumbUpIcon /></Button>
        <Badge badgeContent={like} color="success"></Badge>
        <Button onClick={() => setDislike(dislike + 1)}><ThumbDownIcon /></Button>
        <Badge badgeContent={dislike} color="error"></Badge>
      </ButtonGroup>
    </div>
  );
}

export default Movies;
