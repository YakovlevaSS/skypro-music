import { useEffect } from 'react'
import * as S from './styles'
import PlayerControl from '../PlayerControl/PlayerControl'
import PlayerTrackPlay from '../PlayerTrackPlay/PlayerTrackPlay'
import { getTracksByID } from '../../Api/api'

export default function Player({
  isLoaded,
  currentTrack,
  isPlaying,
  setIsPlaying,
  currentTrackID,
  setCurrentTrack,
  isRepeat,
  setIsRepeat,
  playRef,
  volume
}) {
  useEffect(() => {
   
      getTracksByID(currentTrackID).then((track) => {
        setCurrentTrack(track)
      })
      // .catch ((curenterror) => {
      //   setError(curenterror.message);
      // })
      // .finally(() => {
      //   setIsLoaded(true);
      // });
    
  }, [currentTrackID])

  return (
    <S.BarPlayer>
      <PlayerControl
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        isRepeat={isRepeat}
        setIsRepeat={setIsRepeat}
        playRef={playRef}
        volume={volume}
      />
      <PlayerTrackPlay isLoaded={isLoaded} currentTrack={currentTrack} />
    </S.BarPlayer>
  )
}
