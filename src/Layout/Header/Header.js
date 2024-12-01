import React, {useContext} from 'react';
import './Header.scss'
import Logo from '../img_layout/OIG4.bRQyA27fOQHol3m8z.z5.png'
import Email from '../img_layout/free-icon-email-482138.png'
import Phone from '../img_layout/free-icon-contact-4450258.png'
import {Link} from 'react-router-dom'
import {CustomContext} from "../../Context";

const Header = () => {
    const {toTop} = useContext(CustomContext)

    return (
        <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={Logo} alt="Logo"/>
            </Link>
            <div className="header__info">
                <p><img src={Email} alt=""/> technolomkg@gmail.com</p>
                <p><img src={Phone} alt=""/> +996 990 22 21 38</p>
            </div>
            <div className="header__line"></div>
            <nav>
                <ul>
                    <Link onClick={()=> toTop()} to='/'>
                        <li>главная</li>
                    </Link>
                    <Link onClick={()=> toTop()} to='/about-us'>
                        <li>о нас</li>
                    </Link>
                    <Link onClick={()=> toTop()} to='/buying-boards'>
                        <li>скупка</li>
                    </Link>
                    <Link onClick={()=> toTop()} to='/contacts'>
                        <li>контакты</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;