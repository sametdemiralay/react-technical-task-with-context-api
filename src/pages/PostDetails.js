import React, {useContext} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'

const PostDetails = () => {
    const {token} = useParams();
    const navigate = useNavigate();
    const { postData } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        let postt = { userId: 1, title: 'samcoo', body: 'samco panze' };

        postData(postt);
        navigate("/")
    }

    return (
        <div>
            <h3>Post Details</h3>
            <p>location path: {token}</p>

            <form onSubmit={handleSubmit}>
                <label>selam</label>
                <button type="submit">gonder</button>
            </form>
        </div>
    )
}

export default PostDetails
