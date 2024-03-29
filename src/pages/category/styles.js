/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CategoryBlock = styled.div`
font-size: 24px
color: #fff;
background-color: #383838;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
display: flex;
flex-direction: column;
gap: 50px
`

export const MainCenterblock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`

export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`

export const CenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const ErrorBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  font-size: 24px;
  color: #ad61ff;
`;