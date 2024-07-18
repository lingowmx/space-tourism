import { createContext } from "react";
import { useState, useEffect } from "react";

export const SpaceContext = createContext();
export const SpaceProvider = ({ children }) => {
  //Get destination
  const [destinations, setDestinations] = useState([]);
  //Get Crew
  const [crew, setCrew] = useState([]);
  //Get Technology
  const [technology, setTechnology] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const json = await response.json();
        setDestinations(json.destinations);
        setCrew(json.crew);
        setTechnology(json.technology);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return(
    <SpaceContext.Provider
        value={{
            destinations,
            crew,
            technology
        }}
    >
        {children}
    </SpaceContext.Provider>
  )
};


