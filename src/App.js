import "./App.css";
import Music from "./Components/Music/Music.js";
import Video from "./Components/Video/Video.js";

function App() {
  return (
    <>
      <div class="main">
        <div class="box">
         Michael is avaliable for bookings for weddings and events in the South of England. He plays music from around the world and around the corner.
         He plays either a classical guitar or a gretsch baritone electric Guitar. 
         He plays a varity of styles covering classical standards world and folk styles to acoustic covers.
         Along with his own compositions and improvisations. 
         Michael is also interested in ambient and surf style guitar which he plays on the baritone guitar using various effect pedals and loops. 
         Please contact him directly for more details avaliability and prices.      
        </div>
        <div>
          <div className="panel-music">
            <h2>Music</h2>
            <Music />
          </div>
          <div className="panel-video">
            <h2>Videos</h2>
            <Video />
          </div>
        </div>
       </div>
    </>
  );
}

export default App;