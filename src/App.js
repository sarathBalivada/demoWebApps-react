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

</div> 
  );
}






export default App;
