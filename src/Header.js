import React from 'react'
import Moon from './images/icon-moon.svg'
function Header() {
    return (
        <header className="a-header">
            <h1 className="a-header__title">TODO</h1>
            <div className="a-header__switch">
                <img src={Moon} alt="dark mode" />
            </div>
        </header>
    )
}
export default Header