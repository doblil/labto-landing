import { useState } from 'react';
import '../sass/menu.scss';

export const Menu = () => {

const[menuOpen, setMenuOpen] = useState(false)
const handleMenu = () => {
    if (menuOpen){
        return {
            menu: 'burger',
            icon: 'burger__icon burger__icon_active'
        }

    } else {
        return {
            menu:'burger burger_hide',
            icon: 'burger__icon'
        }    }
}

return (
    <header>
        <div class="menu">
            <div className="container">
                <div className={handleMenu().menu}>
                    <ul class="burger__list">
                        <li><a href="#"><div className="burger__item">О сервисе</div></a></li>
                        <li><a href="#possibilities"><div className="burger__item">Возможности</div></a></li>
                        <li><a href="#partnership"><div className="burger__item">Условия сотрудничества</div></a></li>
                        <li><a href="#price"><div className="burger__item">Тарифные планы</div></a></li>
                        <li><a href="#contacts"><div className="burger__item">Контакты</div></a></li>
                        {/* <li><a href="#"><div className="menu__item">Оставить заявку</div></a></li> */}
                    </ul>
                </div>
                <div className="menu__wrap">
                    <ul class="menu__inner">
                        <li><a href="#"><div className="menu__item">О сервисе</div></a></li>
                        <li><a href="#possibilities"><div className="menu__item">Возможности</div></a></li>
                        <li><a href="#partnership"><div className="menu__item">Условия сотрудничества</div></a></li>
                        <li><a href="#price"><div className="menu__item">Тарифные планы</div></a></li>
                        <li><a href="#contacts"><div className="menu__item">Контакты</div></a></li>
                        {/* <li><a href="#"><div className="menu__item">Оставить заявку</div></a></li> */}
                    </ul>
                    <div className={handleMenu().icon} onClick={() => {setMenuOpen(!menuOpen)}}>
                            <span></span>
                    </div>
                    <div className="menu__logo">
                        <img src="icons/menu_logo.svg" alt="logo" />
                        <div className="menu__circle menu__circle1"><img src="icons/circle.svg" alt="circle" /></div>
                        <div className="menu__circle menu__circle2"><img src="icons/circle.svg" alt="circle" /></div>
                        <div className="menu__circle menu__circle5"><img src="icons/circle.svg" alt="circle" /></div>
                        <div className="menu__circle menu__circle3"><img src="icons/circle_white.svg" alt="circle" /></div>
                        <div className="menu__circle menu__circle4"><img src="icons/circle_white.svg" alt="circle" /></div>
                        <div className="menu__circle menu__circle6"><img src="icons/circle_white.svg" alt="circle" /></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}
