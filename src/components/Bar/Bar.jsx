import './bar.css'
import { Player } from "../Player/Player";
import { VolumeBlock } from "../VolumeBlock/VolumeBlock";

/* eslint-disable import/prefer-default-export */
export function Bar() {
    return (
        <div className="bar">
        <div className="bar__content">
          <div className="bar__player-progress" />
          <div className="bar__player-block">
          <Player/>
          <VolumeBlock/>
          </div>
        </div>
      </div>
    )
  }
  