import './sideBarItem.css'
// eslint-disable-next-line import/prefer-default-export
export function SideBarItem(props) {
    return (
        <div className="sidebar__item">
        <a className="sidebar__link" href={props.item.link}>
          <img
            className="sidebar__img"
            src={props.item.img}
            alt="day's playlist"
          />
        </a>
      </div>
    )
    }