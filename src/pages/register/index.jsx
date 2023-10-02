/* eslint-disable consistent-return */
import * as S from './styles'

export default function Registration() {
  return (
<S.Wrapper>
  <S.Container>
    <S.ModalBlock>
      <S.ModalFormLogin>
        <S.ModalFormLoginLink  href="../">
          <S.ModalLogo>
            <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </S.ModalFormLoginLink>
        <S.ModalInput
          type="text"
          name="login"
          placeholder="Почта"
        />
        <S.ModalInput
          type="password"
          name="password"
          placeholder="Пароль"
        />
        <S.ModalInput
          type="password"
          name="password"
          placeholder="Повторите пароль"
        />
        <S.ModalButtonEnter>
          <S.ModalButtonEnterLink href="../index.html">Зарегистрироваться</S.ModalButtonEnterLink>
        </S.ModalButtonEnter>
      </S.ModalFormLogin>
    </S.ModalBlock>
  </S.Container>
</S.Wrapper>
  )
}