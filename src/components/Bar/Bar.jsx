import { useRef, useState, useEffect } from 'react'
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
  const [volume, setVolume] = useState(0.5)

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const handleTimeChange = (event) => {
    playRef.current.currentTime = event.target.value
  }

  useEffect(() => {
    const doNewTime = () => {
      if (playRef.current?.currentTime && playRef.current.duration) {
        setCurrentTime(playRef.current.currentTime)
        setDuration(playRef.current.duration)
      } else {
        setCurrentTime(0)
        setDuration(0)
      }
    }

    playRef.current?.addEventListener('timeupdate', doNewTime)

    return () => {
      playRef.current?.removeEventListener('timeupdate', doNewTime)
    }
  })

  return (
    <S.Bar>
      <S.BarContent>
        <S.StyledProgressInput
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={handleTimeChange}
          // $color="#ff0000"
        />
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
            setVolume={setVolume}
            playRef={playRef}
          />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default Bar
