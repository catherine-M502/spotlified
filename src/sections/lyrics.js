import { getSongsDetails } from "../api";

// Query selectors sur les différents tag de la section lyrics
const songTitle = document.querySelector("#lyrics-section h4");
const artistName = document.querySelector("#lyrics-section h5");
const lyrics = document.querySelector("#lyrics-section p");

// Récupère les détails de la chanson sur l'api et rempli les tags correspondants
const renderLyricsSection = (id) => {
  getSongsDetails(id).then((song) => {
    songTitle.innerHTML = song.title;
    artistName.innerHTML = song.artist.name;
    lyrics.innerHTML = song.lyrics;
    console.log(song);
  });
};

export { renderLyricsSection };
