// eslint-disable-next-line import/prefer-default-export
export function SideBarPerson(props) {
    return (
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">{props.person.name}.{props.person.family}</p>
          <div className="sidebar__icon">
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </div>
    )
    }