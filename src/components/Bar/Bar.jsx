import * as S from './styles';
import Player from "../Player/Player";
import VolumeBlock from "../VolumeBlock/VolumeBlock";

// /* eslint-disable import/prefer-default-export */
function Bar({isLoaded, currentTrack}) {
    return (
        <S.Bar>
        <S.BarContent>
          <S.BarPlayerProgress/>
          <S.BarPlayerBlock>
          <Player 
          isLoaded={isLoaded}
          currentTrack={currentTrack}
          />
          <VolumeBlock/>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    )
  }

  export default Bar
  