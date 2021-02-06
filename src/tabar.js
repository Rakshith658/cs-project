import React from 'react'
import './tabar.css'


function Bar(props) {
    return (
        <div className="tbmain">
            <h3 
            style={{ "margin-left":" 300px"}}
            onClick={()=>{props.onTchange(1)}
            }>Welcome</h3>
            <h3 onClick={()=>{props.onTchange(2)}}>Fontend/Backend</h3>
            <h3 onClick={()=>{props.onTchange(3)}}>Application Devlopment</h3>
            <h3 onClick={()=>{props.onTchange(4)}}>Live Projects</h3>
            <h3 onClick={()=>{props.onTchange(5)}}>About As</h3>
        </div>
    )
}

export default Bar
