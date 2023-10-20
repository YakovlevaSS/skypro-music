import { useRef, useState, useEffect } from 'react'
import * as S from './styles'
import Player from '../Player/Player'
import VolumeBlock from '../VolumeBlock/VolumeBlock'

// /* eslint-disable import/prefer-default-export */
function Bar({
  isLoaded,
  isPlaying,
  setIsPlaying,
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
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
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
