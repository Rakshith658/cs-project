import React from 'react'
import './footer.css'


const Footer = () => {
    return (
        <div className="footer_main">
            <p>
                <h3>
                    You can now view cs-project in the browser.      

                    Local:            http://localhost:3000        
                    On Your Network:  http://192.168.43.183:3000   

                    Note that the development build is not optimized.
                    To create a production build, use yarn build.
                </h3>
            </p>   
        </div>
    )
}

export default Footer

