import * as S from './styles'
import { PlayerControl } from '../PlayerControl/PlayerControl'
import { PlayerTrackPlay } from '../PlayerTrackPlay/PlayerTrackPlay'

// eslint-disable-next-line import/prefer-default-export
export function Player({isLoaded}) {
  return (
    <S.BarPlayer>
      <PlayerControl />
      <PlayerTrackPlay isLoaded={isLoaded}/>
    </S.BarPlayer>
  )
}
