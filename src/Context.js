import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {animateScroll} from "react-scroll";


export const CustomContext = createContext();

export const Context = (props) => {
    const [buttons,setButtons] = useState([])

    useEffect(()=>{
        axios('http://localhost:3031/buttons')
            .then(({data})=>setButtons(data))
    }, [])
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0,
            smooth: true
        })
    };

    const value = {
        toTop,
        buttons
    };
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}