/* eslint-disable import/no-extraneous-dependencies */
import {NavLink} from 'react-router-dom'
import * as S from './styles'
import SideBarPerson from '../SideBarPerson/SideBarPerson'
import categoryArr from '../../utilits/categoryes'

function SideBar({ isLoading }) {
  const fullCategory = categoryArr.map((category) => (
    <S.SidebarItem key={category.id}>
      {!isLoading? (
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
      <SideBarPerson/>
      <S.SidebarBlock>
        <S.SidebarList>{fullCategory}</S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default SideBar;
