import React, { useEffect, useState } from "react";
import axios from "axios";


function StarwarsData() {
    useEffect(() => { 
        console.log("component mounted");
        axios.get("https://swapi.co/api/people/")
        .then(response=>{
            console.log(response.data.results);
        }

        ).
        catch(error=>{console.log("error:", error)})



    }, []);


    return ("card")

}
export default StarwarsData;