import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const name = "Dude" 
  const user = [{
    "pic" : "https://media.tenor.com/eFcg2031PT8AAAAC/star-wars-darth-vader.gif",
    "name" : "Darth Vader",
  },
  {
    "pic" :"https://media0.giphy.com/media/WOb8EeFziTQNE02WXs/giphy.gif",
      "name" : "GOKU",
  },
  {
    "pic" :"https://media.giphy.com/media/5TByaEWvcVl8A/giphy.gif",
    "name" : "Bahubali",
  },
  {
    "pic" : "https://i.pinimg.com/280x280_RS/5b/38/f6/5b38f6ee2b6c1a791c88297f8505ecb7.jpg",
    "name" : "Sarath B",
  },]

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
        "A man from When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice.",
      rating: "8.4",
    },
  ];


  return (
    
    <div className="App">
    
    
      {/* <Msg 
      pic ="https://media.tenor.com/eFcg2031PT8AAAAC/star-wars-darth-vader.gif"
      name = "Darth Vader"/>

<Msg 
      pic ="https://media0.giphy.com/media/WOb8EeFziTQNE02WXs/giphy.gif"
      name = "GOKU"/>

<Msg 
      pic ="https://media.giphy.com/media/5TByaEWvcVl8A/giphy.gif"
      name = "Bahubali"/>
      <Msg 
      pic ="https://i.pinimg.com/280x280_RS/5b/38/f6/5b38f6ee2b6c1a791c88297f8505ecb7.jpg"
      name = "Sarath B"/> */}

      {/* {user.map(({name,pic}) => (
        <Welcome name = {name} pic = {pic}/>
      ))} */}

{/* <Counter /> */}

<div className = "movie-list">
{movies.map(({ poster, mname, summary, rating }) => (
        <Movielist
          poster={poster}
          mname={mname} 
          summary={summary}
          rating={rating}
        />
      ))}
    </div>
    </div>
     
  );
 

}


function Msg({name, pic}) {
  return (
    <div>
      <img height="300" src={pic} />
      <h1 className="name">Hi, {name} 😊!!!</h1>
    </div>
    
  );
}

function Welcome({name, pic}) {
  return (
    <div>
      <img height="300" src={pic} />
      <h1 className="name">Hi, {name} 😊!!!</h1>
    </div>
    
  );
}



function Movielist({ poster, mname, summary, rating }) {
  return (
    <div className = "movie-container">
      <img className = "movie-poster" src={poster} />
      <div className = "movie-spec">
      <h3 className="mname">{mname}</h3>
      <p className="rating">
        <b>IMDB: ⭐{rating}</b>
      </p>
      </div>
     
      <p className="summary">{summary}</p>
      
    </div>
  );
}

// hook - if it is a hook (function), it will start with "use";
function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  // Initial Value for like
  // setLike is the function that will help to update like
  return (
      <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
      
      </div>
  );

}





export default App;
