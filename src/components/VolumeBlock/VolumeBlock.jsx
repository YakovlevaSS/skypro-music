import { VolumeControl } from "../VolumeControl/VolumeControl";

/* eslint-disable import/prefer-default-export */
export function VolumeBlock() {
    return (
            <div className="bar__volume-block volume">
              <div className="volume__content">
                <div className="volume__image">
                  <svg className="volume__svg" alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                  </svg>
                </div>
               <VolumeControl/>
              </div>
            </div>
    )
  }
  