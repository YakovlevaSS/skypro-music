/* eslint-disable jsx-a11y/anchor-is-valid */
import { SideBarItem } from '../SideBarItem/SideBarItem'
import { SideBarPerson } from '../SideBarPerson/SideBarPerson'

// eslint-disable-next-line import/prefer-default-export
export function SideBar() {
  return (
    <div className="main__sidebar sidebar">
      <SideBarPerson person={{ name: 'Sergey', family: 'Ivanov'}} />
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SideBarItem item={{ link: '#', img: 'img/playlist01.png' }} />
          <SideBarItem item={{ link: '#', img: 'img/playlist02.png' }} />
          <SideBarItem item={{ link: '#', img: 'img/playlist03.png' }} />
        </div>
      </div>
    </div>
  )
}
