import './App.css';
import { Component, useEffect, useState } from "react";
import axios from 'axios';

const CLIENT_ID = "9766b5da28a545a9ba7b47922240c363"
const REDIRECT_URI = "http://localhost:3000/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token";

const App = () => {

  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const [accessToken, setAccessToken] = useState("")
  const [selected, setSelected] = useState([])
  const [playlist, setPlaylist] = useState({
    namePlaylist: "",
    descriptionPlaylist: "",
  })

  useEffect(() => {
    const hash = window.location.hash
      .substring(1, window.location.hash.length - 1)
      .split("&")[0]
      .split("=")[1];
    setAccessToken(hash);
    console.log(data)
  })


  const getSpotify = () => {
    fetch(
      "https://api.spotify.com/v1/search?q=" +
        search +
        "&type=track&limit=10&access_token=" +
        accessToken
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.tracks.items);

      })
      .catch((err) => {
       
        console.log(err);
      });
  };


  const createPlaylist = () => {
    axios
      .post(
        "https://api.spotify.com/v1/users/ssbuqvdeig8ga42lrzficjkxx/playlists",

        {
          name: playlist.namePlaylist,
          description: playlist.descriptionPlaylist,
          public: false,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        return alert("Playlist created");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };



  const handleChange = (event) => {
    setSearch(event.target.value)
  };



  const handleSongSelected = (uri) => {
    setSelected([...selected, uri]);
  }

  const handleSongDeselected = (uri) => {
    setSelected(selected.filter((item) => item !== uri));
  }

  const handleSubmitPlaylist = (event) => {
    event.preventDefault();
    createPlaylist()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tatiana Playlist</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        <input value={search} onChange={handleChange}></input>
        <button onCLick={getSpotify}>search</button>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Song image</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              // console.log(data),
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img src={item.album.images[2].url}></img>
                </td>
                <td>{item.name}</td>
                <td>{item.artists[0].name}</td>
                <td>{item.album.name}</td>
                {selected.includes(item.uri) ? (
                  <button
                    onClick={() => handleSongDeselected(item.uri)}
                  >Deselect</button>
                ) : (
                  <button
                    onClick={() => handleSongSelected(item.uri)}
                  >select</button>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='createPlaylist'>
          <h1>CreatePlaylist</h1>
          <form onSubmit={handleSubmitPlaylist}>
            {/* title/namepalylist */}
            <label>title</label>
            <input value={playlist.namePlaylist}></input>
            {/* desc */}
            <label>Description</label> <input value={playlist.descriptionPlaylist}></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;