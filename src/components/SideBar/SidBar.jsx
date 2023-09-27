import * as S from './styles'
import { NavLink } from 'react-router-dom'
import { SideBarPerson } from '../SideBarPerson/SideBarPerson'
import { categoryArr } from '../../utilits/categoryes'

export function SideBar({ isLoaded }) {
  const fullCategory = categoryArr.map((category) => (
    <S.SidebarItem key={category.id}>
      {isLoaded ? (
        <NavLink to={`/category/${category.id}`}>
          <S.SidebarImg src={category.img} alt={category.alt} />
        </NavLink>
      ) : (
        <S.SkeletonSidebar> </S.SkeletonSidebar>
      )}
    </S.SidebarItem>
  ))

  return (
    <S.MainSidebar>
      <SideBarPerson person={{ name: 'Sergey', family: 'Ivanov' }} />
      <S.SidebarBlock>
        <S.SidebarList>{fullCategory}</S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
