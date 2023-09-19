import * as S from './styles'
// eslint-disable-next-line import/prefer-default-export
export function SideBarPerson(props) {
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