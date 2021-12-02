import React, { createContext, useReducer, useEffect, useState } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// const initialState = {
//   allData: [],
//   isLoading: false,
//   isError: false,
// };
const initialState = {
  loading: true,
  error: "",
  allData: [],
};

// const DATA_URL = 'https://jsonplaceholder.typicode.com/posts'
const DATA_URL = 'https://jsonplaceholder.typicode.com/posts?_start=10&_end=40'

// export const GlobalContext = createContext();
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    // const fetchData = async () => {
    //   dispatch({ type: 'ERROR_HANDLE', payload: false });
    //   dispatch({ type: 'LOADING_HANDLE', payload: true });

    //   try {
    //     const result = await axios(DATA_URL);
    //     dispatch({ type: 'GET_ALL_INITIAL_DATA', payload: result.data });
    //   } catch (error) {
    //     dispatch({ type: 'ERROR_HANDLE', payload: true });
    //   }

    //   dispatch({ type: 'LOADING_HANDLE', payload: false });
    // };

    fetchData();
  }, []);

  // actions
  const fetchData = () => {
    axios.get(DATA_URL).then((response) => {
      dispatch({ type: "GET_DATA_SUCCESS", payload: response.data });
      console.log(typeof response.data, response.data);
    })
    .catch((error) => {
      dispatch({ type: "GET_DATA_ERROR" });
    });
  }

  // post / create
  const postData = (item) => {
    axios.post(DATA_URL, item).then(postItem => {
      console.log("----",postItem.data)
      dispatch({ type: "ADD", payload: postItem.data });
    });
  };

  const createPost = (postt) => {
    // axios.post(DATA_URL, postt)
    console.log("selam mk", postt);
    // dispatch({ type: "CREATE_POST", payload: postt });
  };

  return (
    <GlobalContext.Provider value={{ state: state, createPost, fetchData, postData }}>
      {props.children}
    </GlobalContext.Provider>
  );
};


// const article = { title: 'React PUT Request Example' };
//     axios.put('https://reqres.in/api/articles/1', article)