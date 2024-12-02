import React, {useContext} from 'react';
import './Home.scss'
import {CustomContext} from "../Context";
import {Link} from 'react-router-dom'
import Mous from './img_home/Frame.png'
import TronzistorImg from './img_home/lom-600x218.webp'

const Home = () => {
    const {toTop,proba} = useContext(CustomContext)

    return (
        <main className='home'>
            <section className='home__baner'>
                <h1>ТЕХНОЛОМ.KG</h1>
                <p>ПОКУПКА ЛОМА РАДИОДЕТАЛЕЙ ПО ВЫСОКИМ РЫНОЧНЫМ ЦЕНАМ.</p>
                <div className="home__baner__line">

                </div>
                <Link to='/buying-boards'>
                    <button>СМОТРЕТЬ ЦЕНЫ</button>
                </Link>
                <img src={Mous} alt=""/>
            </section>
            <section className='home__buying_parts'>
                <h2>СКУПКА <span>РАДИОДЕТАЛЕЙ, ПРИБОРОВ И ПЛАТ</span></h2>
                <div className="home__buying_parts__line"></div>
                <p>Мы покупаем платы, приборы и радиодетали у любых поставщиков. Ознакомьтесь с нашими ценами, чтобы
                    оценить стоимость ваших устройств, и свяжитесь с нами для организации продажи вашего
                    оборудования</p>
                <div className="home__buying_parts__buttons">
                    <Link to='/buying-boards' onClick={()=>toTop()} >
                        <button onClick={()=>proba("транзисторы")}>СКУПКА ТРАНЗИСТОРОВ</button>
                    </Link>
                    <button>СКУПКА РАЗЪЁМОВ</button>
                    <button>СКУПКА КОНДЕНСАТОРОВ</button>
                    <Link to='/buying-boards' onClick={()=>toTop()}>
                        <button onClick={()=>proba("платы")}>СКУПКА ПЛАТ</button>
                    </Link>
                    <button>СКУПКА ДИОДОВ</button>
                    <button>СКУПКА РЕЗИСТОРОВ</button>
                    <button>СКУПКА РЕЛЕ</button>
                    <button>СКУПКА ПРОЦЕССОРОВ</button>
                    <button>СКУПКА ПРИБОРОВ</button>
                </div>
                <div className="home__buying_parts__line_bottom"></div>
                <div className="home__buying_parts__img">
                    <div className="home__buying_parts__img__2">
                        <img src={TronzistorImg} alt=""/>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default Home;