import React, { useState, createContext } from "react";

const MovieContext = createContext();

const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "HarryPotter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 231245,
    },
    {
      name: "Inception",
      price: "$10",
      id: 23491,
    },
  ]);
  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};

export { MovieContext, MovieProvider };
