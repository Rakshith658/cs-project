import React,{useState} from 'react'
import './F_E.css'
import { FrontEnd ,BackEnd} from './Front_back/Fbody';
import Fbar from './Front_back/Fbar'

const F_E = () => {

    let Ends =<FrontEnd/>

    const [num, setnum] = useState(1);

    const Texchange = (number) =>{
        setnum(number)
    }
    
    switch (num) {
        case 1:
            Ends=<FrontEnd/>
            break;
        case 2: Ends=<BackEnd/>
            break;
        default:
            break;
    }

    return (
        <div className="FEmain">
            <div className="bar">
                <Fbar onTchange={Texchange}/>
            </div>
            <div className="ends">
                {Ends}
            </div>
        </div>
    )
}

export default F_E
