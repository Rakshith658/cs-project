import React,{useState} from 'react'
import './body.css'
import Bar from './tabar'
import Welcome from './components/welcome'
import FE from './components/F_E'
import Appdev from './components/AD'
import Live from './components/LP'
import About from './components/AA'

const Body = () => {


    let Component=<Welcome/>
    const [num, setnum] = useState(1);

    const Texchange = (number) =>{
        setnum(number)
    }  

    switch (num) {
        case 1:
            Component=<Welcome/>
            break;
        case 2: Component=<FE/>
            break;
        case 3:
            Component=<Appdev/>
            break;
        case 4:Component=<Live/>
            break;
        case 5:Component=<About/>
            break;
        default:
            break;
    }

    return (
        <div className="bodymain">
            <Bar onTchange={Texchange}/>
            {Component}            
        </div>
    )
}

export default Body
