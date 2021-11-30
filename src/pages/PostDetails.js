import React from 'react'
import {useParams} from 'react-router-dom'

const PostDetails = () => {
    const {token} = useParams();
    return (
        <div>
            <h3>Post Details</h3>
            <p>location path: {token}</p>
        </div>
    )
}

export default PostDetails
