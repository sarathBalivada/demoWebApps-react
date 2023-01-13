import logo from "./logo.svg";
import "./App.css";

function App() {
  const movies = [
    {
      poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
      mname: "RRR",
      summary:
        "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
      rating: "7.9/10",
    },
    {
      poster:
        "https://assets.thehansindia.com/h-upload/2021/07/10/1087622-vikram.webp",
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
      poster: "https://wallpapercave.com/dwp1x/wp11306822.jpg",
      mname: "ANTE SUNDARANIKI",
      summary:
        "A man from an orthodox Hindu family trains his girlfriend to pretend to be a Brahmin so that his family will accept her.",
      rating: "7.6",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BZTk5ODdhMzYtNTIzZi00MTY4LTgwOWQtODgzYTdhZDRjM2IwXkEyXkFqcGdeQXVyOTY3OTAzOTQ@._V1_.jpg",
      mname: "KANTAARA",
      summary:
        "A man from When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice.orthodox Hindu family trains his girlfriend to pretend to be a Brahmin so that his family will accept her.",
      rating: "8.4",
    },
  ];
  return (
    <div className="App">
      {movies.map(({ poster, mname, summary, rating }) => (
        <Movielist
          poster={poster}
          mname={mname}
          summary={summary}
          rating={rating}
        />
      ))}
    </div>
  );
}

function Movielist({ poster, mname, summary, rating }) {
  return (
    <div>
      <img height="350" src={poster} />
      <h1 className="mname">{mname}</h1>
      <p className="summary">{summary}</p>
      <p className="rating">
        {" "}
        <b>IMDB rating: ⭐{rating}</b>
      </p>
    </div>
  );
}

export default App;
