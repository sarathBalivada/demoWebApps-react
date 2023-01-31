import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import "./movies.css";

function MovieDetails({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  // Fetch the data from mock api

  useEffect(() => {
    const urlMovies = `https://63ad96993e465169165e7345.mockapi.io/movies/${id}`;
    fetch(urlMovies)
      .then((data) => data.json())
      .then((mve) => setMovie(mve));
  }, []);

  // <iframe
  //   width="1370"
  //   height="537"
  //   src="https://www.youtube.com/embed/sOEg_YZQsTI"
  //   title="Baahubali - The Beginning Trailer | Prabhas,Rana Daggubati,Anushka Shetty,Tamannaah|Bahubali Trailer"
  //   frameborder="0"
  //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //   allowfullscreen
  // ></iframe>;

  return (
    <div style={{ margin : "50px",display: "flex",flexDirection:"column" ,gap: "50px" }}>
      <h1>Watch Trailer: </h1>
      <iframe 
        width="950"
        height="450"
        src={movie.trailer}
        title="Youtube-video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="movie-detail-container">
        <h1> {movie.mname}</h1>
        <p>{movie.summary}</p>
        <Button style={{ margin: "10px" }}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default MovieDetails;
