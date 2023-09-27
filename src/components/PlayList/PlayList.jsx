import * as S from './styles'
import { trackArr } from '../../utilits/trackArr'

export function PlayList({ isLoaded }) {
  const fullPlayList = trackArr.map((track) => (
    <S.PlaylistItem key={track.id}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          {isLoaded ? (
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
          ) : (
            <S.SkeletonTitleImage> </S.SkeletonTitleImage>
          )}

          {isLoaded ? (
            <S.TrackTitleText>
              <S.TrackTitleLink href="http://">
                {track.trackTitleLink.title} <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </S.TrackTitleText>
          ) : (
            <S.SkeletonTitle> </S.SkeletonTitle>
          )}
        </S.TrackTitle>

        {isLoaded ? (
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
              {track.trackAuthorLink}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
        ) : (
          <S.SkeletonAuthor> </S.SkeletonAuthor>
        )}

        {isLoaded ? (
          <>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                {track.trackAlbumLink}
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>{track.trackTimeText}</S.TrackTimeText>
            </S.TrackTime>
          </>
        ) : (
          <S.SkeletonAlbum> </S.SkeletonAlbum>
        )}
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ))
  return (
    <S.ContentPlaylist>
      {fullPlayList}
    </S.ContentPlaylist>
  )
}
