/* eslint-disable react/destructuring-assignment */
import { useContext} from 'react';
import UserContext from '../../Context/UserContext';
import * as S from './styles'

export default function SideBarPerson() {
  const { user, setUser } = useContext(UserContext);
console.log(user)
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  const authUser = JSON.parse(localStorage.getItem('user'))
    return (
        <S.SidebarPersonal>
          <S.SidebarPersonalName>{authUser.username}</S.SidebarPersonalName>
          <S.SidebarIcon onClick={handleLogout}>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
    )
    }