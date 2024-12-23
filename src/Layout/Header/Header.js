import React, {useContext} from 'react';
import './Header.scss';
import Logo from '../img_layout/OIG4.bRQyA27fOQHol3m8z.z5.png';
import Email from '../img_layout/free-icon-email-482138.png';
import Phone from '../img_layout/free-icon-contact-4450258.png';
import {Link} from 'react-router-dom';
import {CustomContext} from "../../Context";

const Header = () => {
    const {toTop, mobelMenu, menu, filterMenu, menuFilter, proba, menuFilterAll, filterAll} = useContext(CustomContext);

    return (
        <header className='header'>
            <div className="header__loptop">
                <Link className='header__loptop__logo' to='/'>
                    <img className='header__loptop__logo__img' src={Logo} alt="Logo"/>
                    <p className='header__loptop__logo__p'>TECHNOLOM.KG</p>
                </Link>
                <div className="header__loptop__info">
                    <p><img src={Email} alt=""/> technolomkg@gmail.com</p>
                    <p><img src={Phone} alt=""/> +996 990 22 21 38</p>
                </div>
                <div className="header__loptop__line"></div>

                <nav>

                    <p><Link onClick={() => toTop()} to='/'>главная</Link></p>
                    <p><Link onClick={() => toTop()} to='/about-us'>о нас</Link></p>
                    <p><Link onClick={() => toTop()} to='/contacts'>контакты</Link></p>
                    <div className="header__loptop__filter">
                        <div className="header__loptop__filter__button">
                            <p><Link onClick={() => toTop()} to='/buying-boards'>скупка</Link></p>

                            <div onClick={() => toTop() || menuFilterAll(filterAll === true ? false : true)}
                                 className="header__loptop__filter__button__line">
                                <div className="header__loptop__filter__button__line__but">
                                    <div style={{display: `${filterAll === true ? "none" : "block"}`}}
                                         className="header__loptop__filter__button__line__but__x">

                                    </div>
                                    <div
                                        style={{marginTop: filterAll === true ? '16px' : '0'}}
                                        className="header__loptop__filter__button__line__but__y">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header__loptop__filter__nav"
                             style={{display: `${filterAll === true ? "flex" : "none"}`}}
                        >
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("платы") || toTop() || menuFilterAll(filterAll === true ? false : true)}>Платы</p>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("транзисторы") || toTop() || menuFilterAll(filterAll === true ? false : true)}>Транзисторы</p>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("конденсаторы") || toTop() || menuFilterAll(filterAll === true ? false : true)}>Конденсаторы</p>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("резисторы") || toTop() || menuFilterAll(filterAll === true ? false : true)}>Резисторы</p>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("разъемы") || toTop() || menuFilterAll(filterAll === true ? false : true)}>Разъемы</p>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("диоды") || toTop() || menuFilterAll(filterAll === true ? false : true)}>Диоды</p>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("реле") || toTop() || menuFilterAll(filterAll === true ? false : true)}>Реле</p>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("процессоры") || toTop() || menuFilterAll(filterAll === true ? false : true)}>Процессоры</p>
                            </Link>
                        </div>
                    </div>

                </nav>
                <div onClick={() => mobelMenu(menu === true ? false : true)}
                     className="header__mobel_version__button">

                    <div className="header__mobel_version__button__top"></div>
                    <div className="header__mobel_version__button__center"></div>
                    <div className="header__mobel_version__button__bottom"></div>
                </div>
            </div>
            <div className="header__mobel_version" style={{display: `${menu === true ? "block" : "none"}`}}>
                <div className="header__mobel_version__nav">

                    <Link onClick={() => toTop() || mobelMenu(menu === true ? false : true)} to='/'>
                        <p>
                            главная
                        </p>
                    </Link>

                    <Link onClick={() => toTop() || mobelMenu(menu === true ? false : true)}
                          to='/about-us'>
                        <p>
                            о нас
                        </p>
                    </Link>
                    <Link onClick={() => toTop() || mobelMenu(menu === true ? false : true)}
                          to='/contacts'>
                        <p>
                            контакты
                        </p>
                    </Link>

                    <div className="header__mobel_version__nav__filter">
                        <p onClick={() => toTop() || mobelMenu(menu === true ? false : true)}>
                            <Link
                                to='/buying-boards'
                                className="header__mobel_version__nav__filter__p"
                            >
                                скупка
                            </Link>
                        </p>
                        <div onClick={() => toTop() || menuFilter(filterMenu === true ? false : true)}
                             className="header__mobel_version__nav__filter__button">
                            <div className="header__mobel_version__nav__filter__button__line">
                                <div
                                    style={{display: `${filterMenu === true ? 'none' : 'block'}`}}
                                    className="header__mobel_version__nav__filter__button__line__x">

                                </div>
                                <div
                                    style={{marginTop:  `${filterMenu === true ? '16px' : '0px'}`}}
                                    className="header__mobel_version__nav__filter__button__line__y">

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="header__mobel_version__nav__filter_menu"
                         style={{display: `${filterMenu === true ? "block" : "none"}`}}
                    >
                        <Link to='/buying-boards'>
                            <p onClick={() => proba("платы") || toTop() || menuFilterAll(filterAll === true ? false : true) || mobelMenu(menu === true ? false : true)}>Платы</p>
                        </Link>
                        <Link to='/buying-boards'>
                            <p onClick={() => proba("транзисторы") || toTop() || menuFilterAll(filterAll === true ? false : true) || mobelMenu(menu === true ? false : true)}>Транзисторы</p>
                        </Link>
                        <Link to='/buying-boards'>
                            <p onClick={() => proba("конденсаторы") || toTop() || menuFilterAll(filterAll === true ? false : true) || mobelMenu(menu === true ? false : true)}>Конденсаторы</p>
                        </Link>
                        <Link to='/buying-boards'>
                            <p onClick={() => proba("резисторы") || toTop() || menuFilterAll(filterAll === true ? false : true) || mobelMenu(menu === true ? false : true)}>Резисторы</p>
                        </Link>
                        <Link to='/buying-boards'>
                            <p onClick={() => proba("разъемы") || toTop() || menuFilterAll(filterAll === true ? false : true) || mobelMenu(menu === true ? false : true)}>Разъемы</p>
                        </Link>
                        <Link to='/buying-boards'>
                            <p onClick={() => proba("диоды") || toTop() || menuFilterAll(filterAll === true ? false : true) || mobelMenu(menu === true ? false : true)}>Диоды</p>
                        </Link>
                        <Link to='/buying-boards'>
                            <p onClick={() => proba("реле") || toTop() || menuFilterAll(filterAll === true ? false : true) || mobelMenu(menu === true ? false : true)}>Реле</p>
                        </Link>
                        <Link to='/buying-boards'>
                            <p onClick={() => proba("процессоры") || toTop() || menuFilterAll(filterAll === true ? false : true) || mobelMenu(menu === true ? false : true)}>Процессоры</p>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
