import * as S from './styles'
// eslint-disable-next-line import/prefer-default-export
export function NavItem (props) {
return (
    <S.MenuItem>
    <S.MenuLink href={props.item.link}>
      {props.item.text}
    </S.MenuLink>
  </S.MenuItem>
)
}