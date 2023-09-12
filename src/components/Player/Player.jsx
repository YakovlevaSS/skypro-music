import './player.css'
import { PlayerControl } from '../PlayerControl/PlayerControl'
import { PlayerTrackPlay } from '../PlayerTrackPlay/PlayerTrackPlay'

// eslint-disable-next-line import/prefer-default-export
export function Player({isLoaded}) {
  return (
    <div className="bar__player player">
      <PlayerControl />
      <PlayerTrackPlay isLoaded={isLoaded}/>
    </div>
  )
}
