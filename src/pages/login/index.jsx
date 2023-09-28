/* eslint-disable consistent-return */
import * as S from './styles'
import { NavLink } from 'react-router-dom'

export const LogIn = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.ModalFormLoginLink href="../">
              <S.ModalLogo>
                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </S.ModalFormLoginLink>
            <S.ModalInput type="text" name="login" placeholder="Почта" />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalButtonEnter>Войти</S.ModalButtonEnter>
            <NavLink to = '/register'>
            <S.ModalButtonReg>
                Зарегистрироваться
            </S.ModalButtonReg>
            </NavLink>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Container>
    </S.Wrapper>
  )
}
