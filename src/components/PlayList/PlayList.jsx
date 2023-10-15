/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux'
import * as S from './styles'
import getDuration from '../../utilits/getduration'
import { allTracksSelector } from '../../store/selectors/player'

export default function PlayList({
  isLoaded,
  setCurrentTrackID,
  isPlaying,
}) {
  const handleCurrentTrack = (track) => {
    setCurrentTrackID(track.id)
  }
  const tracks = useSelector(allTracksSelector)
  console.log(tracks);
  
if (tracks?.length > 0) {
  const fullPlayList = tracks.map((track) => (
    <S.PlaylistItem key={track.id} onClick={() => handleCurrentTrack(track)}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          {isLoaded ? (
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                {true ? (
                  <S.Circle
                    $isPlaying={isPlaying}
                    cx="10px"
                    cy="10px"
                    r="7.5"
                  />
                ) : (
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                )}
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
          ) : (
            <S.SkeletonTitleImage> </S.SkeletonTitleImage>
          )}

          {isLoaded ? (
            <S.TrackTitleText>
              <S.TrackTitleLink>
                {track.name} <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </S.TrackTitleText>
          ) : (
            <S.SkeletonTitle> </S.SkeletonTitle>
          )}
        </S.TrackTitle>

        {isLoaded ? (
          <S.TrackAuthor>
            <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
        ) : (
          <S.SkeletonAuthor> </S.SkeletonAuthor>
        )}

        {isLoaded ? (
          <>
            <S.TrackAlbum>
              <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>
                {getDuration(track.duration_in_seconds)}
              </S.TrackTimeText>
            </S.TrackTime>
          </>
        ) : (
          <S.SkeletonAlbum> </S.SkeletonAlbum>
        )}
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ))
  return <S.ContentPlaylist>{fullPlayList}</S.ContentPlaylist>
} 
}
