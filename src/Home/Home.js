import React, {useContext} from 'react';
import './Home.scss'
import {CustomContext} from "../Context";
import {Link} from 'react-router-dom'
import Mous from './img_home/Frame.png'
import TronzistorImg from './img_home/lom-600x218.webp'

const Home = () => {
    const {toTop, proba} = useContext(CustomContext)

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
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("транзисторы")}>СКУПКА ТРАНЗИСТОРОВ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("конденсаторы")}>СКУПКА КОНДЕНСАТОРОВ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("платы")}>СКУПКА ПЛАТ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("резисторы")}>СКУПКА РЕЗИСТОРОВ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("разъемы")}>СКУПКА РАЗЪЕМОВ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("диоды")}>СКУПКА ДИОДОВ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("реле")}>СКУПКА РЕЛЕ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("процессоры")}>СКУПКА ПРОЦЕССОРОВ</button>
                    </Link>
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