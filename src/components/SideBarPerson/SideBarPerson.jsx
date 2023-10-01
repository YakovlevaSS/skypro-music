/* eslint-disable react/destructuring-assignment */
import * as S from './styles'

export default function SideBarPerson(props) {
    return (
        <S.SidebarPersonal>
          <S.SidebarPersonalName>{props.person.name}.{props.person.family}</S.SidebarPersonalName>
          <S.SidebarIcon>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
    )
    }