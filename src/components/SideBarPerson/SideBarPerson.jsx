/* eslint-disable react/destructuring-assignment */
import * as S from './styles'

export default function SideBarPerson({setUser, user}) {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
    return (
        <S.SidebarPersonal>
          <S.SidebarPersonalName>{user}</S.SidebarPersonalName>
          <S.SidebarIcon onClick={handleLogout}>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
    )
    }