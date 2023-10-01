// /* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable jsx-a11y/interactive-supports-focus */
import { useState } from 'react'
import * as S from './styles';
import NavItem from '../NavItem/NavItem'

function ShowMenu({isShow}) {
  if (isShow) {
    return (
      <S.NavMenu>
        <S.MenuList>
          <NavItem item={{ link: '/', text: 'Главное' }} />
          <NavItem item={{ link: '/favorites', text: 'Мой плейлист' }} />
          <NavItem item={{ link: '/login', text: 'Войти' }} />
        </S.MenuList>
      </S.NavMenu>
    )
  }
}

export default function Nav() {
  const [menu, setMenu] = useState(false)
  const hendleClick = () => {
    setMenu(!menu)
  }
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={hendleClick} role="button">
        <S.BurgerLine/>
        <S.BurgerLine/>
        <S.BurgerLine/>
      </S.NavBurger>
      <ShowMenu isShow={menu}/>
    </S.MainNav>
  )

}
