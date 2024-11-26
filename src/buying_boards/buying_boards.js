import React from 'react';
import './buying_boards.scss'
import Home from './img__buying/free-icon-home-7543165.png'
import {Link} from 'react-router-dom'
import Email from "../Layout/img_layout/free-icon-email-482138.png";
import Phone from "../Layout/img_layout/free-icon-contact-4450258.png";

const BuyingBoards = () => {
    return (
        <section className='buying'>
            <div className="buying__banner">
                <h1>Скупка электронных плат в Токмоке</h1>
                <p><img src={Home} alt=""/> <Link to='/'>Home</Link> <span>></span> Скупка электронных плат в Токмоке
                </p>
            </div>
            <div className="buying__info container">
                <div className="buying__info__left">
                    <div className="buying__info__left__top">
                        <h2>Скупка плат</h2>
                        <p>Цена указана за 1кг <br/>
                            Берём абсолютно любые платы.</p>
                        <p>Срезкой являются детали, не проходящие по типу, паспорту или наименованию.</p>
                    </div>
                    <div className="buying__info__left__product">
                        <div className="buying__info__left__product__top">
                            <p>Изображение</p>
                            <p>Название</p>
                            <p>Примечание</p>
                            <p>Цена сом шт/кг</p>
                        </div>

                    </div>
                    <div className="buying__info__left__discripion">
                        <div className="buying__info__left__discripion__top">
                            <h2>Требования к электронным платам</h2>
                            <p>
                                Убрать: <br/>
                                1. Металлические рамки,части и блоки. <br/>
                                2. Аллюминиевые радиаторы и стойки <br/>
                                3. Медные катушки(более 2 см) <br/>
                                4. Конденсаторы К-50, аллюминиевые и пластмассовые(более 2 см) <br/>
                                5. Весь пластик и провода <br/>
                                6. По дорогим позициям: все платы должны быть целые, с чипами и ламелями
                            </p>
                        </div>
                        <div className="buying__info__left__discripion__line"></div>
                        <div className="buying__info__left__discripion__bottom">
                            <p>Если вас интересует скупка плат, то вы обратились по адресу. Компания «Радиолом22»
                                предлагает
                                свои услуги по выкупу разнообразных плат отечественного и импортного производства. <br/>
                                <br/>
                                Мы работаем на постоянной основе. Нас интересуют любые объемы и партии как от частных,
                                так и
                                юридических лиц. Вне зависимости от того, новые вы предлагаете детали или б/у, мы рады
                                каждому поставщику и способны предоставить одни из лучших условий для
                                сотрудничества. <br/>
                                <br/>
                                Скупка плат — один из основных видов нашей деятельности. Постоянные и оптовые клиенты
                                могут
                                рассчитывать на более выгодные условия. Наша компания осуществляет полностью законную
                                скупку
                                плат не первый год. За это время мы накопили солидный опыт в скупке старых плат и
                                оборудования. Перечень принимаемых нами изделий обширен. <br/>
                                <br/>
                                Наши специалисты проводят профессиональную оценку, содержащихся в оборудовании элементов
                                и
                                выносят вердикт по его стоимости. Вам даже нет необходимости разбирать на детали. Мы
                                сделаем
                                это за вас. <br/>
                                <br/>
                                Цена на скупку плат не стабильна — она определяется на момент сдачи. Основой выступают
                                котировки биржи драгоценных металлов. На стоимость влияет тип изделия, год производства,
                                состояние, наличие маркировки и отдельные нюансы каждого элемента. Обо всех факторах,
                                влияющих на конечную стоимость специалист открыто проинформирует. <br/>
                                <br/>
                                При согласовании стоимости общая сумма вознаграждения подлежит уплате немедленно в день
                                обращения и в 100% объеме. Способ выплаты Вы выбираете самостоятельно. Квитанция – также
                                обязательный атрибут сделки. Бухгалтерские документы для юридических лиц выдаются по
                                запросу. <br/>
                                <br/>
                                Если вы хотите максимально дорого сдать технические драгметаллы или не разобранные
                                элементы/оборудование, то мы предложим наиболее привлекательные условия сотрудничества.
                                Даже
                                с учетом постоянного колебания стоимости ценного сырья, мы готовы предложить максимально
                                возможную цену. Поэтому мы стараемся поддерживать на стабильно высоком уровне
                                предлагаемую
                                стоимость.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="buying__info__line">

                </div>
                <div className="buying__info__right">
                    <h3>Скупка радиодеталей</h3>
                    <div className="buying__info__right__line_h3"></div>
                    <div className="buying__info__right__nav">
                        <p>Платы</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p>Транзисторы</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p>Конденсаторы</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p>Резисторы</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p>Разъемы</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p>Диоды</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p>Реле</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p>Процессоры</p>
                        <div className="buying__info__right__nav__line"></div>
                    </div>
                    <h4>Свяжитесь с нами!</h4>
                    <p><img src={Home} alt=""/> Кыргызская республика г. Токмок - Бишкек</p>
                    <p><img src={Phone} alt=""/> +996 990 22 21 38</p>
                    <p><img src={Phone} alt=""/> +996 509 08 02 99</p>
                    <p><img src={Email} alt=""/> technolomkg@gmail.com</p>
                    <div className="buying__info__right__nav__line"></div>
                </div>
            </div>
        </section>
    );
};

export default BuyingBoards;