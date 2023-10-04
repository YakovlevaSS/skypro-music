import * as S from './styles'

export default function PlayList({ isLoaded, tracks, setCurrentTrack  }) {

  const handleCurrentTrack = (track) => setCurrentTrack(track);

  const fullPlayList = tracks.map((track) => (
    <S.PlaylistItem key={track.id} onClick={() => handleCurrentTrack(track)}>
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
              <S.TrackTitleLink >
                {track.name} <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </S.TrackTitleText>
          ) : (
            <S.SkeletonTitle> </S.SkeletonTitle>
          )}
        </S.TrackTitle>

        {isLoaded ? (
          <S.TrackAuthor>
            <S.TrackAuthorLink>
              {track.author}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
        ) : (
          <S.SkeletonAuthor> </S.SkeletonAuthor>
        )}

        {isLoaded ? (
          <>
            <S.TrackAlbum>
              <S.TrackAlbumLink >
                {track.album}
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>{track.release_date}</S.TrackTimeText>
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
