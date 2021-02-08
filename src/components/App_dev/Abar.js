import React from 'react'
import './Abar.css'

const Abar = (props) => {
    return (
        <div className="Abarmain">
            <h3 onClick={()=>{props.onTchange(1)}}>Android</h3>
            <h3 onClick={()=>{props.onTchange(2)}}>IOS</h3> 
            <h3 onClick={()=>{props.onTchange(3)}}>Cross-platform</h3>
        </div>
    )
}

export default Abar
