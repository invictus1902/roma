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
                return "🔧 Скупка резисторов в Токмоке – лучшие цены!📈";
            case "разъемы":
                return "🔌Скупка разъемов в Токмоке💥- Выгодно и Быстро";
            case "диоды":
                return "⚡Скупка диодов в Токмоке | Выгодные цены и быстрая оценка!💡";
            case "реле":
                return "⚙️Скупка реле в Токмоке🔄 – выгодные условия!";
            case "процессоры":
                return "🖥️ Скупка процессоров в Токмоке💰";
            default:
                return "Скупка электронных плат в Токмоке";
        }
    };

    const [product, setProduct] = useState([])


    useEffect(() => {
        axios('http://localhost:3031/product')
            .then(({data}) => setProduct(data))
    }, []);


    const [filter, setFilter] = useState('платы')

    const proba = (el) => {
        setFilter(el)
    };
    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:3031/product/${id}`);
        window.location.reload()
    };

    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0,
            smooth: true
        })
    };

    const [menu,setMenu] = useState(false)

    const mobelMenu = (el)=>{
        setMenu(el)
    }

    const value = {
        toTop,
        product,
        filter,
        proba,
        renderHeader,
        deleteProduct,
        mobelMenu,
        menu
    };
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}