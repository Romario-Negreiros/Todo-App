import React from 'react'
import Moon from './images/icon-moon.svg'
import Sun from './images/icon-sun.svg'

function Header(props) {
    const themeSwitch = () => {
        document.querySelector('body').classList.toggle('body-dark-mode')
        document.querySelector('.b-taskCreator').classList.toggle('taskCreator-dark-mode')
        document.querySelector('.manager').classList.toggle('manager-dark-mode')
        document.querySelector('.dark-theme').classList.toggle('moon-inative')
        document.querySelector('.light-theme').classList.toggle('sun-active')
        if (props.theme === '') props.setTheme('dark-mode')
        else props.setTheme('')
    }
    return (
        <header className="a-header">
            <h1 className="a-header__title">TODO</h1>
            <div onClick={themeSwitch} className="a-header__switch">
                <img className="dark-theme" src={Moon} alt="dark mode" />
                <img className="light-theme" src={Sun} alt="light mode" />
            </div>
        </header>
    )
}
export default Header