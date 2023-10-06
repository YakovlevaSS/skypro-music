import { useRef, useState } from 'react'
import * as S from './styles'
import Player from '../Player/Player'
import VolumeBlock from '../VolumeBlock/VolumeBlock'

// /* eslint-disable import/prefer-default-export */
function Bar({
  isLoaded,
  currentTrack,
  isPlaying,
  setIsPlaying,
  currentTrackID,
  setCurrentTrack,
}) {
  const [isRepeat, setIsRepeat] = useState(false)
  const playRef = useRef(null)
  const [volume, setVolume] = useState(0, 5)

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <Player
            isLoaded={isLoaded}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTrackID={currentTrackID}
            setCurrentTrack={setCurrentTrack}
            isRepeat={isRepeat}
            setIsRepeat={setIsRepeat}
            playRef={playRef}
            volume={volume}
          />
          <VolumeBlock 
          volume={volume}
          setVolume={setVolume} />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default Bar
