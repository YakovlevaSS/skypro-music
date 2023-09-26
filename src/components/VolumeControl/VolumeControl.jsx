import * as S from './styles'

/* eslint-disable import/prefer-default-export */
export function VolumeControl() {
    return (
                <S.VolumeProgress>
                  <S.VolumeProgressLine 
                    type="range"
                    name="range"
                  />
                </S.VolumeProgress>
    )
  }