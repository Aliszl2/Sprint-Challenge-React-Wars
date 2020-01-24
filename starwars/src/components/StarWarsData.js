import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export function StarWarsData() {
  const [starWarsChars, setStarWarsChars] = useState([]);
  const [page, setPage] = useState([]);

  useEffect(() => {
    console.log("component mounted");
    axios
      .get("https://swapi.co/api/people/?page=1")
    //   ?page=1
    //   ?page=2
    //   ?page=3
      .then(response => {
          console.log(response.data.next);
          console.log(response.data);
        console.log(response.data.results);
        setStarWarsChars(response.data.results);
       

      })

      .catch(error => {
        console.log("error:", error);
      });
  }, []);
  console.log(starWarsChars);

  return (
      
       starWarsChars.map(chars => {
        return <StarWarsCard
        name={chars.name}
        height ={chars.height}
        mass={chars.mass}
        hair_color={chars.hair_color}
        skin_color={chars.skin_color}
        />;
      })
  );
}

export function StarWarsDataPg2() {
    const [starWarsChars, setStarWarsChars] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    useEffect(() => {
      console.log("component mounted");
      axios
        .get("https://swapi.co/api/people/?page=2")
        .then(response => {
                console.log(response.data);
                console.log(response.data.results);
          setStarWarsChars(response.data.results);
        })
  
        .catch(error => {
          console.log("error:", error);
        });
    }, []);
  
  
    return starWarsChars.map(chars => {
      
      return (
       
        <StarWarsCard
          name={chars.name}
          height={chars.height}
          mass={chars.mass}
          hair_color={chars.hair_color}
          skin_color={chars.skin_color}
        />
       
      );
    });
  }
  export function StarWarsDataPg3() {
    const [starWarsChars, setStarWarsChars] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    useEffect(() => {
      console.log("component mounted");
      axios
        .get("https://swapi.co/api/people/?page=3")
        .then(response => {
                console.log(response.data);
                console.log(response.data.results);
          setStarWarsChars(response.data.results);
        })
  
        .catch(error => {
          console.log("error:", error);
        });
    }, []);
  
  
    return starWarsChars.map(chars => {
      
      return (
       
        <StarWarsCard
          name={chars.name}
          height={chars.height}
          mass={chars.mass}
          hair_color={chars.hair_color}
          skin_color={chars.skin_color}
        />
       
      );
    });
  }
