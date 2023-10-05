import { useEffect } from 'react'
import * as S from './styles'
import PlayerControl from '../PlayerControl/PlayerControl'
import PlayerTrackPlay from '../PlayerTrackPlay/PlayerTrackPlay'
import { getTracksByID } from '../../api'

export default function Player({
  isLoaded,
  currentTrack,
  isPlaying,
  setIsPlaying,
  currentTrackID,
  setCurrentTrack,
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
  console.log(currentTrack)

  return (
    <S.BarPlayer>
      <PlayerControl
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
      />
      <PlayerTrackPlay isLoaded={isLoaded} currentTrack={currentTrack} />
    </S.BarPlayer>
  )
}
