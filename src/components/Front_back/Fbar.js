import React from 'react'
import './Fbar.css'

const Fbar = (props) => {
    return (
        <div className="Fbarmain">
            <h3 onClick={()=>{props.onTchange(1)}}>Frontend</h3>
            <h3 onClick={()=>{props.onTchange(2)}}>Backend</h3> 
        </div>
    )
}

export default Fbar
