import {useLocation} from "react-router-dom"
import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {animateScroll} from "react-scroll";


export const CustomContext = createContext();

export const Context = (props) => {
    const location = useLocation();
    useEffect(() => {
        const titleName = document.querySelector("title");
        const nameObdject = () => {
            if (location.pathname === "/buying-boards") {
                titleName.innerHTML = renderHeader()
            }
            else {
                titleName.innerHTML = "Технолом"
            }
        };
        nameObdject()
    });

    const renderHeader = () => {
        switch (filter) {
            case "транзисторы":
                return "💲Скупка транзисторов в Токмоке 🔧 – лучшие цены!";
            case "конденсаторы":
                return "🔋Скупка конденсаторов в Токмоке🚀";
            case "резисторы":
                return "🔧 Скупка резисторов в Бишкеке – лучшие цены!📈";
            default:
                return "Скупка электронных плат в Токмоке";
        }
    };

    const [product, setProduct] = useState([])


    useEffect(() => {
        axios('http://localhost:3031/product')
            .then(({data}) => setProduct(data))
    }, []);


    const [filter, setFilter] = useState('резисторы')

    const proba = (el) => {
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
        proba,
        renderHeader
    };
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}