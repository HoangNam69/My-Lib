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
                    <a className='header-action__login' href='#' onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}>Login
                        <svg className='header-action-login__icon'
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"

                        >
                            <g clipPath="url(#clip0_112_62)">
                                <path className='header-action-login__path'
                                    d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15M10 17L15 12M15 12L10 7M15 12H3"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_112_62">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                </div>
            </div>
        );
    }
}

export default Header;