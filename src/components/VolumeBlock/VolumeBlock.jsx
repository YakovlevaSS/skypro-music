import { useState } from 'react';
import * as S from './styles'

export default function VolumeBlock({volume, setVolume}) {
const [offVolume, setOffVolume] = useState(false)

    const handleVolume = (event) => {
    setVolume(event.target.value);
  };

  const handleOffVolume = () => {
    setOffVolume(!offVolume);
    if (offVolume) {
      setVolume(0)
    }
    else {
      setOffVolume(volume)
    }
  };
  
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt="volume" onClick={handleOffVolume}>
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            type="range"
            name="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolume}
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  )
}
