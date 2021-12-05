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

// const DATA_URL = "https://my-json-server.typicode.com/sametdemiralay/demo/books"

const DATA_URL = 'https://jsonplaceholder.typicode.com/posts'
// const DATA_URL = 'https://jsonplaceholder.typicode.com/posts?_start=10&_end=40'

// export const GlobalContext = createContext();
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
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
      console.log("hata---", error);
    });
  }

  // post / create
  const postData = async(item) => {
    await axios.post(DATA_URL, item).then(postItem => {
      console.log("----",postItem.data)
      dispatch({ type: "ADD", payload: postItem.data });
    });
  };
  // delete
  const deleteData = (id) => {
    axios.delete(`${DATA_URL}/${id}`).then(deleteItem => {
      console.log("--delete--",deleteItem)
      // dispatch({ type: "ADD", payload: deleteItem });
    });
  };
  // put / update
  const UpdateData = async(id,updateItem) => {
    await axios.put(`${DATA_URL}/${id}`, updateItem).then(res => {
      console.log("guncel", res.data);
      dispatch({ type: "UPDATE", payload: {data:res.data, id:id} });
    });
  };


  return (
    <GlobalContext.Provider value={{ state: state, fetchData, postData, deleteData, UpdateData }}>
      {props.children}
    </GlobalContext.Provider>
  );
};


// const article = { title: 'React PUT Request Example' };
//     axios.put('https://reqres.in/api/articles/1', article)
