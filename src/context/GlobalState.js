import React, { createContext, useReducer, useEffect, useState } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  allData: [],
  isLoading: false,
  isError: false,
};

const DATA_URL = 'https://jsonplaceholder.typicode.com/posts'

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'ERROR_HANDLE', payload: false });
      dispatch({ type: 'LOADING_HANDLE', payload: true });

      try {
        const result = await axios(DATA_URL);
        dispatch({ type: 'GET_ALL_INITIAL_DATA', payload: result.data });
      } catch (error) {
        dispatch({ type: 'ERROR_HANDLE', payload: true });
      }

      dispatch({ type: 'LOADING_HANDLE', payload: false });
    };

    fetchData();
  }, []);

  // actions
  const createPost = (postt) => {
    // axios.post(DATA_URL, postt)
    console.log("selam mk", postt);
    // dispatch({ type: "CREATE_POST", payload: postt });
  };

  return (
    <GlobalContext.Provider value={{ state: state, createPost }}>
      {props.children}
    </GlobalContext.Provider>
  );
};


// const article = { title: 'React PUT Request Example' };
//     axios.put('https://reqres.in/api/articles/1', article)