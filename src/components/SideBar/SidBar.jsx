/* eslint-disable jsx-a11y/anchor-is-valid */
import { SideBarItem } from "../SideBarItem/SideBarItem"

// eslint-disable-next-line import/prefer-default-export
export function SideBar() {
    return (
        <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__icon">
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
          <SideBarItem item = {{link: '#', img: 'img/playlist01.png'}}/>
          <SideBarItem item = {{link: '#', img: 'img/playlist02.png'}}/>
          <SideBarItem item = {{link: '#', img: 'img/playlist03.png'}}/>
          </div>
        </div>
      </div>
    )
    }