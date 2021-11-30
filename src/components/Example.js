import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Example = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div>
      {state.isError ? (
        <p>Error...</p>
      ) : state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>baslik</h3>
          {state.allData.map((item) => (
            <p key={item.id}>- {item.name}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default Example;
