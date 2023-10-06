/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect} from 'react'
import * as S from './styles'

export default function PlayerControl({
  isPlaying,
  setIsPlaying,
  currentTrack,
  isRepeat,
  setIsRepeat,
  playRef,
  volume
}) {

  const handleClick = () => {
    if (isPlaying) {
      playRef.current.pause()
      setIsPlaying(false)
    } else {
      playRef.current.play()
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    if (isPlaying && currentTrack) {
      playRef.current.play();
    } else {
     playRef.current.pause();
    }
  }, [isPlaying, currentTrack, playRef]);
  
  const repeatClick = () => {
    playRef.current.loop = !isRepeat;
    setIsRepeat(!isRepeat)
  }
  console.log(isRepeat);

  useEffect(() => {
    if (playRef && currentTrack) {
      playRef.current.volume = volume;
    }
  }, [currentTrack, playRef, volume]);

  const prevClick = () => {
    alert ('Еще не реализовано')
  }

  const nextClick = () => {
    alert ('Еще не реализовано')
  }

  const shuffleClick = () => {
    alert ('Еще не реализовано')
  }

  return (
    <S.PlayerControls>
      <S.AudioComponent
        controls
        src={currentTrack?.track_file}
        ref={playRef}
        autoPlay
      />
      <S.PlayerBtnPrev>
        <S.PlayerBtnPrevSvg alt="prev"onClick = {prevClick}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay>
        <S.PlayerBtnPlaySvg alt={isPlaying ? "play" : "pause"} onClick={handleClick}>
          {isPlaying ? (
            <use xlinkHref="/img/icon/sprite.svg#icon-pause" />
          ) : (
            <use xlinkHref="/img/icon/sprite.svg#icon-play" />
          )}
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext>
        <S.PlayerBtnNextSvg alt="next"onClick = {nextClick}>
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat>
        <S.PlayerBtnRepeatSvg $isRepeat={isRepeat} alt="repeat" onClick = {repeatClick}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle>
        <S.PlayerBtnShuffleSvg alt="shuffle" onClick = {shuffleClick}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
