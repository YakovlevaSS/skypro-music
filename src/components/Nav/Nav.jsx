import './nav.css'
import { NavItem } from "../NavItem/NavItem"

// eslint-disable-next-line import/prefer-default-export
export function Nav() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
            <NavItem item = {{link: '#', text: 'Главное'}}/>
            <NavItem item = {{link: '#', text: 'Мой плейлист'}}/>
            <NavItem item = {{link: '../signin.html', text: 'Войти'}}/>
        </ul>
      </div>
    </nav>
  )
}
