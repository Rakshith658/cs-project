import React from 'react';
import './Lbar.css';

const Lbar = (props) => {
    
    return (
        <div className="Lbarmain" >
            <h1 onClick={()=>{props.onTchange(1)}}>Introduction</h1>
            <h1 onClick={()=>{props.onTchange(2)}}>C</h1>
            <h1 onClick={()=>{props.onTchange(3)}}>C++</h1>
            <h1 onClick={()=>{props.onTchange(4)}}>JavaScript</h1>
            <h1 onClick={()=>{props.onTchange(5)}}>Python</h1>
            <h1 onClick={()=>{props.onTchange(6)}}>Java</h1>
            <h1 onClick={()=>{props.onTchange(7)}}>PHP</h1>
            <h1 onClick={()=>{props.onTchange(8)}}>.Net</h1>
        </div>
    )
}

export default Lbar
