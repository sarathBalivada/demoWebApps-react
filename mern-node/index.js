const express = require("express");
const app = express();

const PORT = 9001;

const movies = [
  {
    trailer: "https://www.youtube.com/embed/NgBoMJy386M",
    id: "100",
    poster:
      "https://imageio.forbes.com/specials-images/imageserve/6244301dbcea8044ecc7b3b0/A-poster-of-SS-Rajamouli-s--RRR--/0x0.jpg?format=jpg&crop=2471,1852,x0,y330,safe&width=960",
    mname: "RRR",
    summary:
      "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
    rating: "7.9/10",
    language : "telugu",
  },
  {
    trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
    id: "101",
    poster:
      "https://feeds.abplive.com/onecms/images/uploaded-images/2021/07/10/273e787ba809e725948334340c658e68_original.jpg",
    mname: "VIKRAM",
    summary:
      "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.",
    rating: "8.3",
    language : "tamil",
  },
  {
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    id: "102",
    poster:
      "https://media5.bollywoodhungama.in/wp-content/uploads/2017/03/Bahubali-2-The-Conclusion.jpg",
    mname: "BAHUBALI-2",
    summary:
      "After learning that his father was brutally killed by Bhallaladeva, Mahendra Baahubali raises an army to defeat him and release his mother from the former's captivity.",
    rating: "8.2",
    language : "telugu",
  },
  {
    trailer: "https://www.youtube.com/embed/d9MyW72ELq0",
    id: "103",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    mname: "AVATAR-2",
    summary:
      "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
    rating: "7.9",
    language : "english",
  },
  {
    trailer: "https://www.youtube.com/embed/O1nDozs-LxI",
    id: "104",
    poster: "https://m.media-amazon.com/images/I/71o1aRN1FJL._SL1100_.jpg",
    mname: "FIGHT CLUB",
    summary:
      "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.n      ",
    rating: "8.8",
    language : "english",

  },
  {
    trailer: "https://www.youtube.com/embed/6MUcuqbGTxc",
    id: "105",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE3NTgzNDg1Ml5BMl5BanBnXkFtZTYwODE4Mjg4._V1_.jpg",
    mname: "BEFORE SUNRISE",
    summary:
      "While travelling on a train in Europe, Jesse, an American man, meets Celine, a French woman. On his last day in Europe before returning to the US, he decides to spend his remaining hours with her.",
    rating: "8.1",
    language : "english",
  },
  {
    trailer: "https://www.youtube.com/embed/wERgpPK44w0",
    id: "106",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTYxYzIyZmYtMjAxMi00MWU2LWFiYTgtM2VlMjQ1YmYyYTcwXkEyXkFqcGdeQXVyMjk5MDYzMDA@._V1_.jpg",
    mname: "E NAGARANIKI EMAINDHI",
    summary:
      "Childhood friends Vivek, Karthik, Kaushik, and Uppi hope for careers in film-making during university but eventually give up and settle into other jobs. To earn money for a wedding, they enter Goa Short film festival and rekindle their dream.n      ",
    rating: "7.9",
    language : "telugu",
  },
];

// Method of rest api - GET method
app.get("/", (request, responce) => {
  responce.send("Hello World, Sarath !");
});

app.get("/movies", (request, responce) => {
    const { language } = request.query;
    language ? responce.send(movies.filter((a) => a.language === language )) : responce.send(movies);
    console.log(language);

  
});

app.get(`/movies/:id`, (request, responce) => {
    const id = request.params.id;
    const [movie] = movies.filter((a) => a.id === id );
    
        responce.send(movie || { messege :"No match"});
     
})

app.listen(PORT, () => console.log("The server is started in", PORT));

