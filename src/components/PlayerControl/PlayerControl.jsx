/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { setCurrentTrackRedux, toggleShuffled } from '../../store/slices/player'
// } from '../../store/action/creator/player'
import {
  currentTrackSelector,
  // allTracksSelector,
  shuffledSelector,
  shuffledPlaylistSelector,
  // currentPlaylistSelector,
  activePlaylistSelector,
} from '../../store/selectors/player'

export default function PlayerControl({
  isPlaying,
  setIsPlaying,
  isRepeat,
  setIsRepeat,
  playRef,
  volume,
}) {
  const dispatch = useDispatch()
  // const [shuffledIndex, setShuffledIndex] = useState(0)
  const currentTrack = useSelector(currentTrackSelector)
  // const tracks = useSelector(allTracksSelector)
  const tracks = useSelector(activePlaylistSelector)


  const shuffledTracks = useSelector(shuffledPlaylistSelector)
  const isShufled = useSelector(shuffledSelector)
  const handleClick = () => {
    if (isPlaying) {
      playRef.current.pause()
      setIsPlaying(false)
    } else {
      playRef.current.play()
      setIsPlaying(true)
    }
  }

  // useEffect(() => {
  //   if (isPlaying && currentTrack) {
  //     playRef.current.play()
  //   } else {
  //     playRef.current.pause()
  //   }
  // }, [isPlaying, currentTrack, playRef])

  const repeatClick = () => {
    playRef.current.loop = !isRepeat
    setIsRepeat(!isRepeat)
  }

  useEffect(() => {
    if (playRef && currentTrack) {
      playRef.current.volume = volume
    }
  }, [currentTrack, playRef, volume])

  const shuffledMusic = [...tracks].sort(function () {
    return Math.round(Math.random()) - 0.5
  })

  const shuffleClick = () => {
    if (!isShufled) {
      // setShuffledIndex(0)
      dispatch(
        toggleShuffled({ shufflePlaylist: [...shuffledMusic], shuffled: true }),
      )
    } else {
      dispatch(toggleShuffled({ shufflePlaylist: [], shuffled: false }))
    }
  }

  const nextClick = () => {
    const playList = isShufled ? shuffledTracks : tracks
    const currentIndexTrack = playList.findIndex(
      (track) => track.id === currentTrack.id,
    )
    const newTrack = tracks[currentIndexTrack + 1]
    if (!newTrack) {
      return
    }
    dispatch(setCurrentTrackRedux(newTrack))
  }

  const prevClick = () => {

    if (playRef.current.currentTime > 5) {
      playRef.current.currentTime = 0
      return
    }

    const playList = isShufled ? shuffledTracks : tracks
    const currentIndexTrack = playList.findIndex(
      (track) => track.id === currentTrack.id,
    )
    const newTrack = tracks[currentIndexTrack - 1]
    if (!newTrack) {
      return
    }
    dispatch(setCurrentTrackRedux(newTrack))
  }

  // const playingTrack = () => {
  //   const durationtrack = playRef.current.duration
  //   const curTime = playRef.current.currentTime
  //   if (durationtrack === curTime) {
  //     nextClick()
  //   }
  // }

  return (
    <S.PlayerControls>
      <S.AudioComponent
        controls
        src={currentTrack?.track_file}
        ref={playRef}
        autoPlay
        // onTimeUpdate={playingTrack}
        onEnded={() => nextClick()}
      />
      <S.PlayerBtnPrev>
        <S.PlayerBtnPrevSvg alt="prev" onClick={prevClick}>
          <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay>
        <S.PlayerBtnPlaySvg
          alt={isPlaying ? 'play' : 'pause'}
          onClick={handleClick}
        >
          {isPlaying ? (
            <use xlinkHref="/img/icon/sprite.svg#icon-pause" />
          ) : (
            <use xlinkHref="/img/icon/sprite.svg#icon-play" />
          )}
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext>
        <S.PlayerBtnNextSvg alt="next" onClick={nextClick}>
          <use xlinkHref="/img/icon/sprite.svg#icon-next" />
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat>
        <S.PlayerBtnRepeatSvg
          $isRepeat={isRepeat}
          alt="repeat"
          onClick={repeatClick}
        >
          <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle>
        <S.PlayerBtnShuffleSvg
          $shuffleTrackEnable={isShufled}
          alt="shuffle"
          onClick={shuffleClick}
        >
          <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
