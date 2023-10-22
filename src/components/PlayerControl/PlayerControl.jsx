/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import {
  toggleShuffled,
  setCurrentTrackRedux,
} from '../../store/slices/player'
import {
  currentTrackSelector,
  allTracksSelector,
  shuffledSelector,
  shuffledPlaylistSelector,
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [shuffledIndex, setShuffledIndex] = useState(0)
  const currentTrack = useSelector(currentTrackSelector)
  const tracks = useSelector(allTracksSelector)
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
    console.log(isShufled)
    if (!isShufled) {
      setShuffledIndex(0)
      dispatch(toggleShuffled([...shuffledMusic], true))
    } else {
      dispatch(toggleShuffled([], false))
    }
  }

  const nextClick = () => {
    let nextIndex

    if (isShufled) {
      if (shuffledIndex === shuffledTracks.length - 1) {
        setIsPlaying(false)
        playRef.current.pause()
        return
      }
      nextIndex = (shuffledIndex + 1) % shuffledTracks.length
      setShuffledIndex(nextIndex)
      playRef.current.play()
      setIsPlaying(true)
    } else {
      if (currentIndex === tracks.length - 1) {
        setIsPlaying(false)
        playRef.current.pause()
        return
      }
      nextIndex = (currentIndex + 1) % tracks.length
      setCurrentIndex(nextIndex)
      playRef.current.play()
      setIsPlaying(true)
    }

    const nextMusic = isShufled ? shuffledTracks[nextIndex] : tracks[nextIndex]
    dispatch(setCurrentTrackRedux(nextMusic))
  }

  const prevClick = () => {
console.log(isShufled);

    if (playRef.current.currentTime > 5) {
      playRef.current.currentTime = 0
      return
    }

    let prevIndex

    if (isShufled) {
      if (shuffledIndex === 0) {
        setIsPlaying(false)
        playRef.current.pause()
        return
      }
      prevIndex = (shuffledIndex - 1) % shuffledTracks.length
      setShuffledIndex(prevIndex)
      playRef.current.play()
      setIsPlaying(true)
    } else {
      if (currentIndex === 0) {
        setIsPlaying(false)
        playRef.current.pause()
        return
      }
      prevIndex = (currentIndex - 1) % tracks.length
      setCurrentIndex(prevIndex)
      playRef.current.play()
      setIsPlaying(true)
    }

    const prevMusic = isShufled ? shuffledTracks[prevIndex] : tracks[prevIndex]
    dispatch(setCurrentTrackRedux(prevMusic))
  }

  const playingTrack = () => {
    const durationtrack = playRef.current.duration
    const curTime = playRef.current.currentTime
    if (durationtrack === curTime) {
      nextClick()
    }
  }

  return (
    <S.PlayerControls>
      <S.AudioComponent
        controls
        src={currentTrack?.track_file}
        ref={playRef}
        autoPlay
        onTimeUpdate={playingTrack}
      />
      <S.PlayerBtnPrev>
        <S.PlayerBtnPrevSvg alt="prev" onClick={prevClick}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
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
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat>
        <S.PlayerBtnRepeatSvg
          $isRepeat={isRepeat}
          alt="repeat"
          onClick={repeatClick}
        >
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle>
        <S.PlayerBtnShuffleSvg
          $shuffleTrackEnable={isShufled}
          alt="shuffle"
          onClick={shuffleClick}
        >
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
