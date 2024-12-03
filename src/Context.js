import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {animateScroll} from "react-scroll";


export const CustomContext = createContext();

export const Context = (props) => {
    const [product,setProduct] = useState([])



    useEffect(()=>{
        axios('http://localhost:3031/product')
            .then(({data})=>setProduct(data))
    }, []);


    const [filter,setFilter] = useState('конденсаторы')

    const proba = (el)=>{
        setFilter(el)
    };

    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0,
            smooth: true
        })
    };

    const value = {
        toTop,
        product,
        filter,
        proba
    };
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}