import * as S from './styles'
import VolumeControl from "../VolumeControl/VolumeControl";

export default function VolumeBlock() {
    return (
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                  </S.VolumeSvg>
                </S.VolumeImage>
               <VolumeControl/>
              </S.VolumeContent>
            </S.BarVolumeBlock>
    )
  }
  