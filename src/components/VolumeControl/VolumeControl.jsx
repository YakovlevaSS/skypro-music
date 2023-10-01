import * as S from './styles'

export default function VolumeControl() {
    return (
                <S.VolumeProgress>
                  <S.VolumeProgressLine 
                    type="range"
                    name="range"
                  />
                </S.VolumeProgress>
    )
  }