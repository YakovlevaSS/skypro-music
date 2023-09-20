import styled, { css } from 'styled-components';

export const PlayerControls = styled.div `
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0 27px 0 31px;
  `
  const PlayerBthMixin = css`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  `
  
  
  export const PlayerBtnPrev = styled.div `
  ${PlayerBthMixin};
    margin-right: 23px;
  `
  
  export const PlayerBtnPrevSvg = styled.svg `
    width: 15px;
    height: 14px;
    &:hover {
      fill: transparent;
      stroke: #acacac;
      cursor: pointer;
    }
    &:active {
      fill: transparent;
      stroke: #ffffff;
      cursor: pointer;
    }
  `
  
  export const PlayerBtnPlay = styled.div `
  ${PlayerBthMixin};  
  margin-right: 23px;
  `
  
  export const PlayerBtnPlaySvg = styled.svg `
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
    &:hover {
      fill: transparent;
      stroke: #acacac;
      cursor: pointer;
    }
    &:active {
      fill: transparent;
      stroke: #ffffff;
      cursor: pointer;
    }
  `
  
  export const PlayerBtnNext = styled.div `
  ${PlayerBthMixin};  
  margin-right: 28px;
    fill: #a53939;
  `
  
  export const PlayerBtnNextSvg = styled.svg `
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #d9d9d9;
    &:hover {
      fill: transparent;
      stroke: #acacac;
      cursor: pointer;
    }
    &:active {
      fill: transparent;
      stroke: #ffffff;
      cursor: pointer;
    }
  `
  
  export const PlayerBtnRepeat = styled.div `
  ${PlayerBthMixin};  
  margin-right: 24px;
  `
  
  export const PlayerBtnRepeatSvg  = styled.svg `
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    &:hover {
      fill: transparent;
      stroke: #acacac;
      cursor: pointer;
    }
    &:active {
      fill: transparent;
      stroke: #ffffff;
      cursor: pointer;
    }
  `
  
  export const PlayerBtnShuffle = styled.div `
  ${PlayerBthMixin};  
  display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  `
  
  export const PlayerBtnShuffleSvg = styled.svg `
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    &:hover {
      fill: transparent;
      stroke: #acacac;
      cursor: pointer;
    }
    &:active {
      fill: transparent;
      stroke: #ffffff;
      cursor: pointer;
    }
  `

//   ._btn-icon:active .track-play__like-svg,
// ._btn-icon:active .track-play__dislike-svg {
//   fill: #696969;
//   stroke: #ffffff;
//   cursor: pointer;
// }