import React from 'react'
import './Fbody.css'

export const FrontEnd = () => {
    return(
        <div className="FEmain">
            <p>
                <h3>
                    Front End Development: The part of a website that user interacts with directly is termed as front end. 
                    It is also referred to as the ‘client side’ of the application. 
                    It includes everything that users experience directly: text colors and styles, images, graphs and tables, buttons, colors, and navigation menu. 
                    HTML, CSS, and Javascript are the languages used for Front End development.
                </h3>
            </p>
            <div className="list">
                <h2 style={{marginBottom:20,marginTop:20}}>Front end Languages</h2>
                <div className="Flist" style={{marginInline:15}}>
                    <ol>HTML</ol>
                    <ol>CSS</ol>
                    <ol>Javascript</ol>
                </div>
                <h2 style={{marginBottom:20,marginTop:20}}>Front End Frameworks and Libraries: </h2>
                <div className="Flist" style={{marginInline:20}}>
                    <ol>AngularJS</ol>
                    <ol>React.js</ol>
                    <ol>jQuery</ol>
                </div>
            </div>
        </div>
    )
};

export const BackEnd = () => {
    return(
        <div className="FEmain">
            <p>
                <h3>
                    Backend Development: Backend is server side of the website. 
                    It stores and arranges data, and also makes sure everything on the client-side of the website works fine. 
                    It is the part of the website that you cannot see and interact with. 
                    It is the portion of software that does not come in direct contact with the users. 
                    The parts and characteristics developed by backend designers are indirectly accessed by users through a front-end application.
                </h3>
            </p>
            <h2 style={{marginTop:20,marginBottom:20}}>Back end Languages:</h2>
                <div className="Flist">
                    <ol>Node.js</ol>
                    <ol>Python</ol>
                    <ol>C++</ol>
                </div>
        </div>
    )
};

