import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

function StarWarsData() {
  const [starWarsChars, setStarWarsChars] = useState([]);
  useEffect(() => {
    console.log("component mounted");
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setStarWarsChars(response.data.results);
      })

      .catch(error => {
        console.log("error:", error);
      });
  }, []);
  console.log(starWarsChars);

  return starWarsChars.map(chars => {
    return <StarWarsCard/>;
  });
}
export default StarWarsData;
