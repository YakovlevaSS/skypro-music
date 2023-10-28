/* eslint-disable import/no-extraneous-dependencies */
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { RegApi, LogInApi, getToken } from '../../Api/authApi'
import { setAuth } from '../../store/slices/auth'

import * as S from './styles'

export default function AuthPage({
  isLoginMode = false,
  setUser,
  setIsLoginMode,
}) {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [offButton, setOffButton] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const setToken = async () => {
  //   try {
  //     await getToken({ email, password }).then((token) => {
  //       console.log(token)
  //       dispatch(
  //         setAuth({
  //           access: token.access,
  //           refresh: token.refresh,
  //           user: JSON.parse(sessionStorage.getItem('user')),
  //         })
  //       )
  //     })
  //   } catch (currentError) {
  //     console.log(error)
  //   }
  // }

  const handleLogin = async () => {
    try {
      const response = await LogInApi(email, password)
      setUser(response)
      localStorage.setItem('user', JSON.stringify(response))
      setOffButton(true)
      navigate('/')
    } catch (curenterror) {
      setError(curenterror.message)
    } finally {
      setOffButton(false)
    }

    try {
      const token = await getToken(email, password)
      dispatch(
        setAuth({
          access: token.access,
          refresh: token.refresh,
          user: JSON.parse(localStorage.getItem('user')),
        }),
      )
    } catch (currentError) {
      console.log(error)
    }
  }

  const handleRegister = async () => {
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
    } else {
      try {
        const response = await RegApi(email, password)
        setOffButton(true)
        setUser(response)
        localStorage.setItem('user', JSON.stringify(response))
        navigate('/')
      } catch (curenterror) {
        setError(curenterror.message)
      } finally {
        setOffButton(false)
      }
    }

    try {
      const token = await getToken(email, password)
      dispatch(
        setAuth({
          access: token.access,
          refresh: token.refresh,
          user: JSON.parse(localStorage.getItem('user')),
        }),
      )
    } catch (currentError) {
      console.log(error)
    }
  }

  const handleIsLoginMode = () => {
    setIsLoginMode(true)
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister} disabled={offButton}>
                {offButton ? 'Загружаем информацию...' : 'Зарегистрироваться'}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleLogin} disabled={offButton}>
                {offButton ? 'Загружаем информацию...' : 'Войти'}
              </S.PrimaryButton>
              <Link to="/Auth">
                <S.SecondaryButton onClick={handleIsLoginMode}>
                  Зарегистрироваться
                </S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
