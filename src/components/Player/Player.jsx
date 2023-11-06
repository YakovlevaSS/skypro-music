/* eslint-disable import/no-extraneous-dependencies */
// import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as S from './styles'
import PlayerControl from '../PlayerControl/PlayerControl'
import PlayerTrackPlay from '../PlayerTrackPlay/PlayerTrackPlay'
// import { getTracksByID } from '../../Api/api'
import { currentTrackSelector } from '../../store/selectors/player'

export default function Player({
  isLoading,
  isPlaying,
  setIsPlaying,
  isRepeat,
  setIsRepeat,
  playRef,
  volume,
}) {
  const currentTrack = useSelector(currentTrackSelector)

  // useEffect(() => {
   
  //     getTracksByID(currentTrack.id).then((track) => {
  //       setCurrentTrackByID(track)
  //     })
  //     // .catch ((curenterror) => {
  //     //   setError(curenterror.message);
  //     // })
  //     // .finally(() => {
  //     //   setIsLoaded(true);
  //     // });
  //     console.log(currentTrackByID);
    
  // }, [currentTrack])

  return (
    <S.BarPlayer>
      <PlayerControl
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isRepeat={isRepeat}
        setIsRepeat={setIsRepeat}
        playRef={playRef}
        volume={volume}
      />
      <PlayerTrackPlay isLoading={isLoading} currentTrack={currentTrack} />
    </S.BarPlayer>
  )
}
