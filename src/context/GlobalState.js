import React, { createContext, useReducer, useEffect, useState } from "react";
// import AppReducer from './AppReducer'
import axios from "axios";

const initialState = {
  allData: [],
};

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
//   const [state] = useReducer(initialState);
const [datam, setDatam] = useState([])

  useEffect(() => {
      console.log("amk");
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setDatam(arr => [...arr, response.data]))
  }

  return (
    <GlobalContext.Provider value={{ allData: initialState.allData, datam}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
