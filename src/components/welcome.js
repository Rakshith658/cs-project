import React,{useState} from 'react'
import './welcome.css'
import Lbar from './welcome/Lbar'
import { Introduction,C,Cp,Python,Java,JavaScript,PHP,Net } from './welcome/Rbar'


const Welcome = () => {

    // const { "name" : "<Python/>"}
    let RightBar = <Python/>
    // let Hook =<Introduction/>
    const [num, setnum] = useState(1);

    // const I =()=>{
    //     const RightBar =<Introduction/>
    //     return (
    //     <div className="welcomemain">
    //        <Lbar onTchange={Texchange}/> 
    //        {RightBar}
    //     </div>
    // )
    // }
    // const CC =()=>{const ho2=<C/>; setRightBar(ho2)}
    // const Cpp =()=>{const ho3=<Cp/>;setRightBar(ho3)}
    // const P =()=>{const ho4=<Python/>;setRightBar(ho4)}
    // const J =()=>{const ho5=<Java/>;setRightBar(ho5)}
    // const Js =()=>{const ho6=<JavaScript/>;setRightBar(ho6)}
    // const php =()=>{const ho7=<PHP/>;setRightBar(ho7)}
    // const net =()=>{const ho8=<Net/>;setRightBar(ho8)}
    

    const Texchange = (number) =>{
        setnum(number)
    }  

    switch (num) {
        case 1:
            RightBar=<Introduction/>
            break;
        case 2: RightBar=<C/>
            break;
        case 3:
            RightBar=<Cp/>
            break;
        case 4:RightBar=<JavaScript/>
            break;
        case 5:RightBar=<Python/>
            break;
        case 6:RightBar=<Java/>
            break;
        case 7:RightBar=<PHP/>
            break;
        case 8:RightBar=<Net/>
            break;
        default:
            break;
    }
    

    return (
        <div className="welcomemain">
            <div className="barmain">
                <Lbar onTchange={Texchange}/> 
            </div>
            <div className="rmain">
                {RightBar}
            </div>
        </div>
    )
}

export default Welcome
