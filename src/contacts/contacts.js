import React from 'react';
import './contacts.scss'
import Geoloc from './img__contacts/geolokation.png'
import Phone from './img__contacts/phone.png'
import Gmail from './img__contacts/gmail.png'
import Razgovor from './img__contacts/speeking.jpg'

const Contacts = () => {
    return (
        <section className='contacts'>
            <div className="contacts__left">
                <h2>Наш офис <div className="contacts__left__line_h2__top"></div></h2>
                <p><img src={Geoloc} alt=""/> Кыргызская республика г. Токмок - Бишкек</p>
                <p><img src={Phone} alt=""/> +996 990 22 21 38 +996 509 08 02 99</p>
                <p className="contacts__left__gmail"><img src={Gmail} alt=""/> technolomkg@gmail.com</p>
                <h2>Режим работы <div className="contacts__left__line_h2__bottom"></div></h2>
                <p><img src={Phone} alt=""/> После 18:00 и в воскресенье до 15:00
                    </p>
                <img src={Razgovor} alt=""/>
            </div>
            <div className="contacts__line">

            </div>
            <div className="contacts__right">
                <h2>Обратная связь <div className="contacts__right__line_h2"></div></h2>
                <div className="contacts__right__form">
                    <form action="">
                        <div className="contacts__right__form__input__top">
                            <p><strong>Ваше имя (обязательно)</strong></p>
                            <input type="text"/>
                        </div>
                        <div className="contacts__right__form__input__top">
                            <p><strong>Ваш телефон (обязательно)</strong></p>
                            <input type="text"/>
                        </div>
                        <div className="contacts__right__form__input__bottom">
                            <p><strong>Сообщение</strong></p>
                            <input type="text"/>
                        </div>
                        <button>Оправить</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;