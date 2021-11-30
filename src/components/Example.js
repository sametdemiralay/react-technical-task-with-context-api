import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';

const Example = () => {
  const { state, createPost } = useContext(GlobalContext);

  console.log('data', state.allData);

  const postt = { userId: 1, title: 'samcoo', body: 'samco panze' };

  const handlerr = (e) => {
    e.preventDefault();
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
    //   // handle success
    //   console.log("Bu 1. => ", response);
    // });
    // axios.post('https://jsonplaceholder.typicode.com/posts', postt);
    // axios({
    //     method: 'post',
    //     url: 'https://jsonplaceholder.typicode.com/posts',
    //     data: postt
    //   });
    makeGetRequest()
    // createPost(postt)

    // axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
    //   // handle success
    //   console.log("Bu 2. => ", response);
    // });
  };

  async function makeGetRequest() {
    let payload = { userId: 1, title: 'samcoo', body: 'samco panze' };

    let res = await axios.post('https://jsonplaceholder.typicode.com/posts', payload);

    let data = res.data;
    console.log("post ",data);

    let res2 = await axios.get('https://jsonplaceholder.typicode.com/posts')
    let data2 = res2
    console.log("get ",data2);
}

  return (
    <div>
      {state.isError ? (
        <p>Error...</p>
      ) : state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <form onSubmit={handlerr}>
            <h3>baslik</h3>
            <button type="submit">ekle</button>
          </form>

          {state.allData.map((item) => (
            <p key={item.id}>- {item.title}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default Example;
