import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';

const Home = () => {
    const { state, fetchData } = useContext(GlobalContext);

    // useEffect(()=> {
    //     fetchData()
    // },[])

    console.log("selam-", state);

    return (
        <div>
            <h3>HOME</h3>
            <Link to="/user/2">Go to id 2</Link>

            <ul>
            {state.allData.map(itm => (
                <li key={itm.id}>{itm.title}</li>
            ))}
            </ul>
            
        </div>
    )
}

export default Home