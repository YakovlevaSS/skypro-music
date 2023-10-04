import * as S from './styles'
import PlayerControl from '../PlayerControl/PlayerControl'
import PlayerTrackPlay from '../PlayerTrackPlay/PlayerTrackPlay'

export default function Player({isLoaded, currentTrack}) {
  return (
    <S.BarPlayer>
      <PlayerControl />
      <PlayerTrackPlay 
      isLoaded={isLoaded}
      currentTrack={currentTrack}
    />
    </S.BarPlayer>
  )
}
