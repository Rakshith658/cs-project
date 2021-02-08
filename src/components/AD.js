import React,{useState} from 'react'
import './AD.css'
import Abar from './App_dev/Abar';
import { Android,IOS,Crossplatform} from './App_dev/Abody';


const AD = () => {

    let App = <Android/>

    const [num, setnum] = useState(1);

    const Texchange = (number) =>{
        setnum(number)
    }

    switch (num) {
        case 1:
            App =<Android/>
            break;
        case 2: App=<IOS/>
            break;
        case 3: App=<Crossplatform/>
            break;
        default:
            break;
    }


    return (
        <div className="ADmain">
            <div className="bar">
                <Abar onTchange={Texchange}/>
            </div>
            <div className="info">
                {App}
            </div>
        </div>
    )
}

export default AD
