import CardSong from "../../component/CardSong/CardSong";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "../../redux/auth-slice";
import "./home.css";

function Home() {
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:3000/create-playlist";
  const SCOPE = "playlist-modify-private";
  const AUTH_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
  // const isLogged = useSelector((state) => state.auth.isLoggedIn); 
  // const dispatch = useDispatch();

  const isAuth = () => {
    window.location = AUTH_URL;
    // dispatch(isLogin())
    localStorage.setItem("isLoggedIn", true);
  };

  
  return (
    <div className="Home">
      <div className="header"></div>
      <div className="centerImage">
      </div>
      <div className="content">
        <p className="title">
          Klik button dibawah untuk login bestie &#129409;
        </p>
        <button type="submit" onClick={isAuth}>
        <div className="title-ofContent">
          <p className="titleHome">SPOTIFY</p>
          <p className="titleHomeChild">but its 90's</p>
          <p className="titleDescription">Listening to your favourite musics,<br/> don’t be mad, let it flow, be happy <br/> and have fun :D</p>
        </div>
        </button>
        <button className="buttonLogin" type="submit" onClick={isAuth}>
          Click here to login
        </button>
      </div>
      <div className="footer">
        <p className="watermark">
          Love &#128150; peace &#9996; and gawl &#129305; by Okta
        </p>
      </div>
    </div>
  );
}

export default Home;