import './sideBarItem.css'
// eslint-disable-next-line import/prefer-default-export
export function SideBarItem(props) {
    return (
        <div className="sidebar__item">

            {props.item.load? (
        <a className="sidebar__link" href={props.item.link}>
        <img
          className="sidebar__img"
          src={props.item.img}
          alt="day's playlist"
        />
      </a>) : (
               <div className="skeleton__sidebar"> </div>
            )}

      </div>
    )
    }