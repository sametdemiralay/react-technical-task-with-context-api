import React, {useContext} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'

const PostDetails = () => {
    const {token} = useParams();
    const navigate = useNavigate();
    const { postData, deleteData, UpdateData } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        let postt = { userId: 1, title: 'samcoo', body: 'samco panze' };
        // let postt ={author: "sam", title: "my porns", summary: "funny", type: "porn", id: 99}

        postData(postt);
        navigate("/")
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        UpdateData(99, { userId: 1, title: 'guncel', body: 'guncel' })
    }

    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     deleteData(99)
    //     navigate("/")
    // }

    return (
        <div>
            <h3>Post Details</h3>
            <p>location path: {token}</p>

            <form onSubmit={handleSubmit}>
                <label>selam</label>
                <button type="submit">gonder</button>
            </form>
            <button onClick={e => handleUpdate(e)}>update</button>
        </div>
    )
}

export default PostDetails
