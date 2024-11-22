import {createContext, useEffect, useState} from "react";
import axios from "axios";


export const CustomContext = createContext();

export const Context = (props) => {
    const [buttons,setButtons] = useState([])

    useEffect(()=>{
        axios('http://localhost:3031/buttons')
            .then(({data})=>setButtons(data))
    }, [])

    const value = {
        buttons
    };
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}