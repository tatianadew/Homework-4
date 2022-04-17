import "./Spotify.css";
import useSearch from "../../hooks/useSearch";
import React, { useState } from "react";
import SearchForm from "../../component/searchForm/SearchForm";
import CardSong from "../../component/CardSong/CardSong";
import PlaylistForm from "../../component/playlistForm/playlistForm";
import PlaylistCard from "../../component/playlistCard/playlistCard";
import useCreatePlaylist from "../../hooks/useCreatePlaylist";

function Spotify() {
  const { searchResult, handleChange, onSearch } = useSearch();
  
  const { 
    handlePlaylist, 
    handleForm, 
    handleNotSelected, 
    handleSelected,
    isLoggedOut,
    handleView,
    newPlaylist,
    check,
    isSelected
  } = useCreatePlaylist();
  return (
    <div className="container">
      <div className="link-toSpotify">
        <button type="submit" onClick={isLoggedOut}>
          Logout
        </button>
      </div>
      <div className="formAndView">
        <div className="create-playlist">
          <PlaylistForm
            onCreate={handlePlaylist}
            handleChangeTitle={handleForm}
            handleChangeDesc={handleForm}
          />
        </div>
        <div className="viewPlaylist">
          <button type="submit" onClick={handleView}>
            View Playlist
          </button>
        </div>
      </div>
      <div className="twoSided">
        <div className="spotify-track">
          <SearchForm onSearch={onSearch} handleChange={handleChange} />
          <div className="listOf-track">
            {searchResult.map((item) => (
              <CardSong
                url={item.album.images[0].url}
                albumName={item.album.name}
                artistName={item.artists[0].name}
                alt="Image not loaded"
                key={item.uri}
                isSelected={isSelected.includes(item.uri)}
                onClick={(isSelected) =>
                  // eslint-disable-next-line implicit-arrow-linebreak
                  isSelected
                    ? handleSelected(item.uri)
                    : handleNotSelected(item.uri)}
                nameOfButton={
                  isSelected.includes(item.uri) ? "Deselect" : "Select"
                }
              />
            ))}
          </div>
        </div>
        <div className="playlistTrack">
          <p>New Playlist</p>
          <div className="playlistWrapper">
            <p>{newPlaylist?.viewPlaylist.name}</p>
            {check.emptyView ? (
              <p>Playlist will show after create playlist :D</p>
            ) : (
              newPlaylist?.viewPlaylist?.tracks?.items?.map((item) => (
                  <PlaylistCard
                    url={item.track.album.images[0].url}
                    alt="Not loaded"
                    albumName={item.track.album.name}
                    artistName={item.track.artists[0].name}
                    key={item.track.uri}
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <PlaylistCard
  url={item.track.album.images[0].url}
  alt="Not loaded"
  albumName={item.track.album.name}
  artistName={item.track.artists[0].name}
/>; */
}

export default Spotify;