import "./Music.css";

let items = [
  { name: "PylonSong.mp3", display: "Prelude BWV 999 by J.S. Bach" },
  {
    name: "Alhambra.mp3",
    display: "Recuerdos de la Alhambra by Francisco Tárrega",
  },
  { name: "PylonSong.mp3", display: " Etude E Minor by Mauro Giuliani" },
  {
    name: "Estudio.mp3",
    display: "Estudio in E Minor for Classical Guitar by Francisco Tárrega",
  },
  { name: "GymnopedieNo1.mp3", display: "Gymnopedie No 1 by Erik Satie" },
];

let itemList = items.map((item, index) => {
  return (
    <li key={index}>
      <h4>{item.display}</h4>
      <audio controls>
        <source src={item.name} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </li>
  );
});

function Music() {
  return <ul>{itemList}</ul>;
}

export default Music;
