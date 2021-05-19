import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/reducer";

const AppContext = createContext();

const initialValues = {
  artists: [],
  albums: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const fetchArtistsData = async () => {
    // const response = await fetch(
    //   "https://my-json-server.typicode.com/NourElDeenKhaled/Music-App/artists"
    // );
    const response = await fetch("http://localhost:8888/artists");
    const data = await response.json();
    dispatch({ type: "SET_ARTISTS_DATA", payload: data });
  };

  const fetchAlbumsData = async () => {
    // const response = await fetch(
    //   "https://my-json-server.typicode.com/NourElDeenKhaled/Music-App/artists"
    // );

    const response = await fetch("http://localhost:8888/albums");
    const data = await response.json();
    dispatch({ type: "SET_ALBUMS_DATA", payload: data });
  };

  useEffect(() => {
    fetchArtistsData();
    fetchAlbumsData();
  }, []);
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
