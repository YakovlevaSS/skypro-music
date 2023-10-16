/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles'
import { toggleShuffled, setCurrentTrackRedux } from '../../store/action/creator/player';
import { currentTrackSelector, allTracksSelector } from '../../store/selectors/player'

export default function PlayerControl({
  isPlaying,
  setIsPlaying,
  isRepeat,
  setIsRepeat,
  playRef,
  volume,
}) {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledTracks, setShuffledTracks] = useState([]);
  const [shuffledIndex, setShuffledIndex] = useState(0);
  const [shuffleTrackEnable, setShuffleTrackEnable] = useState(false);
  const currentTrack = useSelector(currentTrackSelector)
  const tracks = useSelector(allTracksSelector)

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

  useEffect(() => {
    if (playRef && currentTrack) {
      playRef.current.volume = volume;
    }
  }, [currentTrack, playRef, volume]);

  const shuffleTracks = () => {
    const shuffledMusic = [...tracks].sort(function () {
      return Math.round(Math.random()) - 0.5
    })
    return shuffledMusic;
  };

    const nextClick = () => {
      let nextIndex;

      if (shuffleTrackEnable) {
        if (shuffledIndex === shuffledTracks.length - 1) {
          setIsPlaying(false);
         playRef.current.pause();
          return;
        }
        nextIndex = (shuffledIndex + 1) % shuffledTracks.length;
        setShuffledIndex(nextIndex);
      } else {
        if (currentIndex === tracks.length - 1) {
          setIsPlaying(false);
          playRef.current.pause();
          return;
        }
        nextIndex = (currentIndex + 1) % tracks.length;
        setCurrentIndex(nextIndex);
      }
  
      const nextMusic = shuffleTrackEnable
        ? shuffledTracks[nextIndex]
        : tracks[nextIndex];
        dispatch(setCurrentTrackRedux(nextMusic));
  }
  

  const prevClick = () => {
    if (playRef.current.currentTime > 5) {
      playRef.current.currentTime = 0;
      return;
    }

    let prevIndex;

    if (shuffleTrackEnable) {
      if (shuffledIndex === 0) {
        setIsPlaying(false);
        playRef.current.pause();
        return;
      }
      prevIndex =
        (shuffledIndex - 1 + shuffledTracks.length) % shuffledTracks.length;
      setShuffledIndex(prevIndex);
    } else {
      if (currentIndex === 0) {
        setIsPlaying(false);
        playRef.current.pause();
        setCurrentIndex(tracks.length - 1);
        return;
      }
      prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
      setCurrentIndex(prevIndex);
    }

    const prevMusic = shuffleTrackEnable
      ? shuffledTracks[prevIndex]
      : tracks[prevIndex];
      dispatch(setCurrentTrackRedux(prevMusic));
  }

  const playingTrack = () => {
    const durationtrack = playRef.current.duration
    const curTime = playRef.current.currentTime
    if (durationtrack === curTime) {
      nextClick()
    }}

  useEffect(() => {
    if (shuffleTrackEnable) {
      const newShuffledTracks = shuffleTracks();
      setShuffledTracks(newShuffledTracks);
      setShuffledIndex(0);
    } else {
      setShuffledTracks([]);
    }
  }, [shuffleTrackEnable]);

  const shuffleClick = () => {
    if (!shuffleTrackEnable) {
      setShuffleTrackEnable(true);
      const newShuffledTracks = shuffleTracks();
      setShuffledTracks(newShuffledTracks);
      setShuffledIndex(0);
      dispatch(toggleShuffled(newShuffledTracks, true));
    } else {
      setShuffleTrackEnable(false);
      setShuffledTracks([]);
      dispatch(toggleShuffled([], false));
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
        <S.PlayerBtnShuffleSvg $shuffleTrackEnable={shuffleTrackEnable} alt="shuffle" onClick = {shuffleClick}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
