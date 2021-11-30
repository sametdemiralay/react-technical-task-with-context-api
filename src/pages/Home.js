import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h3>HOME</h3>
            <Link to="/user/2">Go to id 2</Link>
        </div>
    )
}

export default Home
