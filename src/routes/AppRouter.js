import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
  import Home from "../pages/home/Index";
  import Spotify from "../pages/spotify/Spotify"
  import { useSelector } from "react-redux";
  
  function AppRouter() {
        // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // console.log("islogged in router = ", isLoggedIn)
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(isLoggedIn);
    return (
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {isLoggedIn ? (
              <Spotify />
            ) : (
              <Redirect exact from="/create-playlist" to="/" />
            )}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
  
  export default AppRouter;