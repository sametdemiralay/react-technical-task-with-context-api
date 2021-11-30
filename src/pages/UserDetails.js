import React from 'react'
import {useParams, Link} from 'react-router-dom'

const UserDetails = () => {
    const {id} = useParams();

    return (
        <div>
            <h3>User Details</h3>
            <p>location path: {id}</p>
            <Link to={`/user/${id}/5`}>Go to id 2 / 5</Link>
        </div>
    )
}

export default UserDetails
