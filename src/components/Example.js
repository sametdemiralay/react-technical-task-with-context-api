import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Example = () => {
    const {datam} = useContext(GlobalContext)

    console.log("datam", datam);
    return (
        <div>
            <h3>baslik</h3>
            {datam.map(val => (
                <p>- {val}</p>
            ))}
        </div>
    )
}

export default Example
