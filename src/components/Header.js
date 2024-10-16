import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='header__logo'>
                    <p className='header__logo--title'>My-Lib</p>
                    <p className='header__logo--author'>Nam Le Hoang</p>
                </div>
                <ul className='header__nav'>
                    <li className='header-nav__item'>
                        <a className='header-nav__link' href='#'>Introduce</a>
                    </li>
                    <li className='header-nav__item'>
                        <a className='header-nav__link' href='#'>Porfolio</a>
                    </li>
                    <li className='header-nav__item'>
                        <a className='header-nav__link' href='#'>Contact</a>
                    </li>
                </ul>
                <div className='header__action'>
                    <a className='header-action__login' href='#'>Login</a>
                    <span className='header-action-login__icon'>

                    </span>
                </div>
            </div>
        );
    }
}

export default Header;