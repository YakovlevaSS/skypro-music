import * as S from './styles'
// eslint-disable-next-line import/prefer-default-export
export function SideBarItem(props) {
    return (
        <S.SidebarItem >

            {props.item.load? (
        <S.SidebarLink href={props.item.link}>
        <S.SidebarImg
          src={props.item.img}
          alt="day's playlist"
        />
      </S.SidebarLink>) : (
               <S.SkeletonSidebar> </S.SkeletonSidebar>
            )}

      </S.SidebarItem>
    )
    }