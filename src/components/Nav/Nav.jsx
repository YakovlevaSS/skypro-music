/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useState } from 'react'
import './nav.css'
import { NavItem } from '../NavItem/NavItem'

function ShowMenu(menu) {
  if (menu) {
    return (
      <div className="nav__menu menu">
        <ul className="menu__list">
          <NavItem item={{ link: '#', text: 'Главное' }} />
          <NavItem item={{ link: '#', text: 'Мой плейлист' }} />
          <NavItem item={{ link: '../signin.html', text: 'Войти' }} />
        </ul>
      </div>
    )
  }
  return (
    <div className="disply__none">
      <ul className="menu__list">
        <NavItem item={{ link: '#', text: 'Главное' }} />
        <NavItem item={{ link: '#', text: 'Мой плейлист' }} />
        <NavItem item={{ link: '../signin.html', text: 'Войти' }} />
      </ul>
    </div>
  )
}

export default function Nav() {
  const [menu, setMenu] = useState(false)
  const hendleClick = () => {
    setMenu(!menu)
  }


  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={hendleClick} role="button">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <ShowMenu menu/>
    </nav>
  )

}
