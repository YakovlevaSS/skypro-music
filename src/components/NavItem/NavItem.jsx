// eslint-disable-next-line import/prefer-default-export
export function NavItem (props) {
return (
    <li className="menu__item">
    <a href={props.item.link} className="menu__link">
      {props.item.text}
    </a>
  </li>
)
}