import React, { createContext, useReducer, useEffect, useState } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  allData: [],
  isLoading: false,
  isError: false,
};

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'ERROR_HANDLE', payload: false });
      dispatch({ type: 'LOADING_HANDLE', payload: true });

      try {
        const result = await axios(
          'https://jsonplaceholder.typicode.com/users'
        );
        dispatch({ type: 'GET_ALL_INITIAL_DATA', payload: result.data });
      } catch (error) {
        dispatch({ type: 'ERROR_HANDLE', payload: true });
      }

      dispatch({ type: 'LOADING_HANDLE', payload: false });
    };

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ state: state }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
