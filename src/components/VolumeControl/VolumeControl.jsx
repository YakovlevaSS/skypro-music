/* eslint-disable import/prefer-default-export */
export function VolumeControl() {
    return (
                <div className="volume__progress _btn">
                  <input
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </div>
    )
  }