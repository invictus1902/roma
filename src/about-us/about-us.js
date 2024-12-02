import React, {useState} from 'react';
import './about-us.scss'
import Home from "../buying_boards/img__buying/free-icon-home-7543165.png";
import {Link} from "react-router-dom";
import Notpad from './img_about-us/notpad.png'
import Comera from './img_about-us/comera.png'
import Cisty from './img_about-us/cisty.png'

const AboutUs = () => {

    const [acar, setAcar] = useState(0);

    const act = (id) => {
        setAcar(acar === id ? 0 : id); // Переключение активного состояния
    };

    return (
        <section className='about-us'>
            <div className="about-us__banner">
                <h1>О НАС</h1>
                <p><img src={Home} alt=""/> <Link to='/'>Home</Link><span>></span>О НАС </p>
            </div>
            <div className="about-us__info">
                <div className="about-us__info__left">
                    <h3>Скупка плат в Бишкеке</h3>
                    <div className="about-us__info__left__line_h3"></div>
                    <p>Если вас интересует скупка плат в токмоке и Бишкеке, то вы обратились по адресу. Компания «Radiolomkg»
                        предлагает свои услуги по выкупу разнообразных плат отечественного и импортного производства. Мы
                        работаем на постоянной основе. Нас интересуют любые объемы и партии как от частных, так и
                        юридических лиц. Вне зависимости от того, новые вы предлагаете детали или б/у, мы рады каждому
                        поставщику и способны предоставить одни из лучших условий для сотрудничества. Постоянные и
                        оптовые клиенты могут рассчитывать на более выгодные условия.</p>
                    <div className="about-us__info__left__line">

                    </div>
                    <div className="about-us__info__left__akardion">
                        <div className="about-us__info__left__akardion__top">
                            <h4>
                                <img src={Notpad} alt=""/>
                                Почему лучше продавать оборудование в специализированную компанию?
                            </h4>
                            <div onClick={acar === 1 ? ()=>act(0) : ()=>act(1)} className="about-us__info__left__akardion__top__p-a-p">
                                <div className="about-us__info__left__akardion__top__p-a-p__plus"></div>
                                <div className="about-us__info__left__akardion__top__p-a-p__minus"></div>
                            </div>
                        </div>
                        <div
                            className={`about-us__info__left__akardion__bottom ${
    acar === 1 ? "about-us__info__left__akardion__bottom_ac" : ""
}`}>
                            <p>
                                Наличие драгметаллов в платах – давно не секрет. Содержание драгметаллов в оборудовании
                                различно, но может достигать весьма ощутимых значений. Однако несмотря на внешнюю
                                привлекательность перспективы выделить их из платы самостоятельно – это либо
                                заканчивается неудачей, либо стоит дороже, чем объём полученных драгоценностей.

                                <br/>
                                Мы предлагаем вам действительно выгодные условия сотрудничества в токмоке и Бишкеке. Наша
                                компания уверенно предлагает вам:
                                <br/>
                                • Покупку оборудования и деталей в любом объеме;
                                <br/>
                                • Высокую цену на все позиции в прайсе;
                                <br/>
                                • Честную, профессиональную оценку всех партий;
                                <br/>
                                • Оперативную оплату любым наиболее удобным способом;
                                <br/>
                                • Возможность пересылки;
                                <br/>
                                • Выезд специалиста к вам на объект при работе с оптовыми партиями.
                            </p>
                        </div>
                    </div>
                    <div className="about-us__info__left__line">

                    </div>

                    <div className="about-us__info__left__akardion">
                        <div className="about-us__info__left__akardion__top">
                            <h4>
                                <img src={Comera} alt=""/>
                                Этапы процесса скупки
                            </h4>
                            <div onClick={acar === 3 ? ()=>act(0) : ()=>act(3)} className="about-us__info__left__akardion__top__p-a-p">
                                <div className="about-us__info__left__akardion__top__p-a-p__plus"></div>
                                <div className="about-us__info__left__akardion__top__p-a-p__minus"></div>
                            </div>
                        </div>
                        <div  className={`${acar === 3 ? 'about-us__info__left__akardion__bottom_ac' : 'about-us__info__left__akardion__bottom'}`}>
                            <p>Чтобы продать радиоматериалы, содержащие драгметаллы, достаточно связаться с нашим
                                представительством, обговорить время своего прибытия, объем и тип продаваемых
                                компонентов. С сотрудником возможно обсудить возможность пересылки подходящим способом
                                (почтой, ТК), если вы проживаете на удалении от пункта приема и личный приезд
                                затруднителен.<br/>
                                Наши специалисты проводят профессиональную оценку, содержащихся в оборудовании
                                элементов и выносят вердикт по его стоимости. Вам даже нет необходимости разбирать
                                на детали. Мы сделаем это за вас.<br/>
                                Так как цена радиолома не стабильна – она определяется на момент сдачи. Основой
                                выступают котировки биржи драгоценных металлов. На стоимость влияет тип изделия, год
                                производства, состояние, наличие маркировки и отдельные нюансы каждого элемента. Обо
                                всех факторах, влияющих на конечную стоимость специалист открыто проинформирует.<br/>
                                При согласовании стоимости общая сумма вознаграждения подлежит уплате немедленно в
                                день обращения и в 100% объеме.<br/>
                                Если вы хотите максимально дорого сдать технические драгметаллы или не разобранные
                                элементы/оборудование, то мы предложим наиболее привлекательные условия
                                сотрудничества. Даже с учетом постоянного колебания стоимости ценного сырья, мы
                                готовы предложить максимально возможную цену. Поэтому мы стараемся поддерживать на
                                стабильно высоком уровне предлагаемую стоимость.<br/>
                                С максимальной выгодой, безопасностью и конфиденциальностью продать радиолом,
                                золото, техническое серебро возможно только в проверенной компании, дорожащей
                                мнением о себе. За счет грамотной политики ценообразования, персонального подхода к
                                любому поставщику, гибких условий мы являемся одним из лидеров кыргызстана и
                                области.<br/>
                                Мы являемся не просто пунктом приема вторичного сырья, мы стабильная компания,
                                стремящаяся непрерывно увеличивать количество постоянных партнеров. Не сомневаемся,
                                что выгодно продав свои радиокомпоненты, вы обратитесь к нам еще не единожды.</p>
                        </div>
                    </div>
                    <div className="about-us__info__left__line">

                    </div>
                </div>
                <div className="about-us__info__line">

                </div>
                <div className="about-us__info__right">
                    <h3>Какие платы и оборудование можно нам продать?</h3>
                    <div className="about-us__info__right__line_h3"></div>
                    <p>Наша компания осуществляет полностью законную деятельность не первый год. За это время мы
                        накопили солидный опыт в <strong>скупке старых плат</strong> и оборудования. Перечень
                        принимаемых нами изделий обширен:</p>
                    <ul>
                        <li>• Материнские платы;</li>
                        <li>• Модули памяти;</li>
                        <li>• Технические платы;</li>
                        <li>• Кондиционеры;</li>
                        <li>• Радиодетали;</li>
                    </ul>
                    <p>На нашем сайте вы всегда найдете перечень оборудования и компонентов, которые можно выгодно
                        нам продать. Самостоятельно изучая соответствующие разделы, вы получаете возможность
                        предварительной оценки своих элементов, их внешнего вида, состояния и маркировки. Отталкиваясь
                        от этих данных вы точно представите конечную выгоду от продажи.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;