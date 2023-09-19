/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from './styles'
import { SideBarItem } from '../SideBarItem/SideBarItem'
import { SideBarPerson } from '../SideBarPerson/SideBarPerson'

// eslint-disable-next-line import/prefer-default-export
export function SideBar({isLoaded}) {
  return (
    <S.MainSidebar>
      <SideBarPerson person={{ name: 'Sergey', family: 'Ivanov'}} />
      <S.SidebarBlock>
        <S.SidebarList>
          <SideBarItem item={{ link: '#', img: 'img/playlist01.png', load: isLoaded }} />
          <SideBarItem item={{ link: '#', img: 'img/playlist02.png', load: isLoaded  }} />
          <SideBarItem item={{ link: '#', img: 'img/playlist03.png', load: isLoaded  }} />
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
