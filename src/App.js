import './App.css';
import Card from './component/Card';
import Datakedua from './datakedua';

function App() {
  return (
  <div className='App'>
    {Datakedua.map((song,index)=>(
      <Card key={index} images={song.album.images[1].url} artists={song.artists[0].name} album={song.name}/>
    ))}
    
    </div>
  );
}

export default App;