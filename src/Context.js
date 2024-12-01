import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {animateScroll} from "react-scroll";


export const CustomContext = createContext();

export const Context = (props) => {
    const [buttons,setButtons] = useState([]);
    const [product,setProduct] = useState([])

    useEffect(()=>{
        axios('http://localhost:3031/buttons')
            .then(({data})=>setButtons(data))
    }, []);


    useEffect(()=>{
        axios('http://localhost:3031/product')
            .then(({data})=>setProduct(data))
    }, []);


    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0,
            smooth: true
        })
    };

    const value = {
        toTop,
        buttons,
        product
    };
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}