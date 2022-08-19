
let items = [
  { name: "More or less by Michael Phillips", src: "https://www.youtube.com/embed/LkHIdHt1rI4" },
  {name: "Backing music for a holiday let in Turkey", src: "https://www.youtube.com/embed/v1BBNUjDwfM" }
];

let itemList = items.map((item, index) => {
  return (
    <li key={index}>
      <h4>{item.name}</h4>
      <iframe width="400" height="280" src={item.src} 
      title= {item.name}
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    </li>
  );
});

function Video() {
  return <>
    <h3>Videos</h3>
    <ul>{itemList}</ul>
  </>
}

  
  export default Video;
