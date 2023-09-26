import styled, { keyframes } from 'styled-components';

export const SidebarItem  = styled.div`
    width: 250px;
    height: 150px;
    margin-bottom: 30px;
 `
  
  export const SidebarLink  = styled.a`
    width: 100%;
    height: 100%;
  `
  
  export const SidebarImg  = styled.img `
    width: 100%;
    height: auto;
  `
  const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
`;

  export const SkeletonSidebar = styled.div `
    background-color: #313131;
    width: 100%;
    height: 100%;
    animation: ${blink} 1s infinite alternate;
  `
  
