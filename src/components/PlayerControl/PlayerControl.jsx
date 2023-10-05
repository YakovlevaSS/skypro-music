/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useEffect } from 'react'
import * as S from './styles'

function AudioPlayer({ isPlaying, currentTrack }) {
  const playRef = useRef(null)

  useEffect(() => {
    if (isPlaying) {
      playRef.current.pause()
    } else {
      playRef.current.play()
    }
  }, [isPlaying])
  console.log(playRef)
  return <audio controls src={currentTrack?.track_file} ref={playRef} autoPlay />
}

export default function PlayerControl({ isPlaying, setIsPlaying }) {
  return (
    <S.PlayerControls>
      <AudioPlayer />
      <S.PlayerBtnPrev>
        <S.PlayerBtnPrevSvg alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay>
        <S.PlayerBtnPlaySvg alt="play" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <use xlinkHref="/img/icon/sprite.svg#icon-pause" />
          ) : (
            <use xlinkHref="/img/icon/sprite.svg#icon-play" />
          )}
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext>
        <S.PlayerBtnNextSvg alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat className=" _btn-icon">
        <S.PlayerBtnRepeatSvg alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle className=" _btn-icon">
        <S.PlayerBtnShuffleSvg alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
