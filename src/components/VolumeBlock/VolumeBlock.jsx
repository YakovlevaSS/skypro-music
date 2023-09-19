import * as S from './styles'
import { VolumeControl } from "../VolumeControl/VolumeControl";

/* eslint-disable import/prefer-default-export */
export function VolumeBlock() {
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
  