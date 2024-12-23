import {useLocation} from "react-router-dom"
import {createContext, useEffect, useState, useRef} from "react";
import emailjs from "emailjs-com"
import axios from "axios";
import {animateScroll} from "react-scroll";



export const CustomContext = createContext();

export const Context = (props) => {

    const form = useRef();
    const [status,setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        console.log('Данные формы:', {
            from_name: formData.get('from_name'),
            namber_user: formData.get('namber_user'),
            message: formData.get('message'),
        });

        emailjs
            .sendForm(
                'service_eplzjji',      // Ваш Service ID
                'template_0fetif2',     // Ваш Template ID
                form.current,           // Форма
                'iCTr7YvPOeeP0Hf7l'     // Ваш Public Key (User ID)
            )
            .then(
                (result) => {
                    console.log('Успешно отправлено:', result.text);
                    setStatus('Сообщение отправлено!');
                    form.current.reset(); // Очищаем форму
                },
                (error) => {
                    console.error('Ошибка отправки:', error.text);
                    setStatus('Ошибка при отправке сообщения.');
                }
            );
    };


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

    const [menu,setMenu] = useState(false);
    const [filterMenu,setFilterMenu] = useState(false);



    // Функция для открытия/закрытия обычного меню
    const mobelMenu = () => {
        setMenu(prevState => {
            const newMenuState = !prevState;
            if (!newMenuState) {
                // Если обычное меню закрывается, закрываем фильтр
                setFilterMenu(false);
            }
            return newMenuState;
        });
    };

    // Функция для открытия/закрытия фильтра
    const menuFilter = () => {
        setFilterMenu(prevState => !prevState);
    };


    const [filterAll,setFilterAll] = useState(false);
    const menuFilterAll = () => {
        setFilterAll(prevState => !prevState);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (img) => {
        setModalImage(img);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage("");
    };

    const value = {
        isModalOpen,
        modalImage,
        openModal,
        closeModal,
        toTop,
        product,
        filter,
        proba,
        renderHeader,
        deleteProduct,
        mobelMenu,
        menu,
        sendEmail,
        form,
        status,
        filterMenu,
        menuFilter,
        menuFilterAll,
        filterAll
    };
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}