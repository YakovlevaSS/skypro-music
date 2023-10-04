import { useRef} from 'react'
import * as S from './styles'


export default function PlayerControl({isPlaying, setIsPlaying, currentTrack}) {

  const playRef = useRef(null)

  const handleClick = () => {
    if (isPlaying) {
      playRef.current.pause()
      setIsPlaying(false)
    } else {
      playRef.current.play()
      setIsPlaying(true)
    }
    }

    return (
        <S.PlayerControls>
          <S.AudioComponent
          controls
          src={currentTrack.track_file}
          ref={playRef}
          autoPlay
         />
          <S.PlayerBtnPrev>
            <S.PlayerBtnPrevSvg alt="prev">
              <use xlinkHref="img/icon/sprite.svg#icon-prev" />
            </S.PlayerBtnPrevSvg>
          </S.PlayerBtnPrev>
          <S.PlayerBtnPlay>
            <S.PlayerBtnPlaySvg 
            alt="play"
            onClick={handleClick}
            >
                  {isPlaying ? (
                    <use xlinkHref="/img/icon/sprite.svg#icon-pause"/>
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-play"/>
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
  