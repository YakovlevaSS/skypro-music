import styled from 'styled-components';

export const NotFoundBloc = styled.div`
display: flex;
flex-direction: column;
`

export const ProblemBig = styled.p`
 color: #FFF;
font-variant-numeric: lining-nums proportional-nums;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 160px;
font-style: normal;
font-weight: 400;
line-height: 168px; 
margin-top: 285px;
margin-bottom: 3px;
`

export const Problem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const ProblemDis = styled.p`
  color: #FFF;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`

export const ProblemImj = styled.img`
  width: 52px;
height: 52px;
`

export const GoToMainButton = styled.button`
  width: 278px;
  height: 52px;
  background-color: #580ea2;
  border-radius: 6px;
  margin-top: 60px;
  margin-bottom: 20px;
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
            &:hover {
              background-color: #3f007d;
            }
          
            &:active {
              background-color: #271a58;
            }
`

export const GoToMainButtonLink = styled.a`
  width: 100%;
height: 100%;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.05px;
color: #ffffff;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
`