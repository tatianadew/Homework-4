import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function useSearch() {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [savedToken, setSavedToken] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const accessToken = useSelector((state) => state.token.value);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const onSearch = (event) => {
    if (isLoggedIn === true && savedToken != null) {
      console.log(accessToken);
      if (accessToken != '') {
      axios
        .get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${savedToken}`,
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            q: `${searchQuery}`,
            type: "track",
          },
        })
        .then((response) => {
          const data = response.data.tracks.items;
          console.log(data);
          setSearchResult(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Login first");
    }
    event.preventDefault();
  };
  }
  

  return {
    searchResult,
    handleChange,
    onSearch,
  };
};