/* eslint-disable react/destructuring-assignment */
import * as S from './styles'

export default function NavItem (props) {
return (
    <S.MenuItem>
    <S.MenuLink to={props.item.link}>
      {props.item.text}
    </S.MenuLink>
  </S.MenuItem>
)
}