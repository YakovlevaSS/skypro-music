import * as S from './styles'

export default function PlayerTrackPlay({isLoaded, currentTrack}) {
    return (
        <S.PlayerTrackPlay>
          <S.TrackPlayerContain>

          {isLoaded? (
            <S.TrackPlayerImage>
            <S.TrackPlaySvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TrackPlaySvg>
          </S.TrackPlayerImage>
            ) : (
                 <S.SceletonPlayerImage> </S.SceletonPlayerImage>
            )}

          {isLoaded? (
            <S.TrackPlayAuthor>
            <S.TrackPlayAuthorLink>
            {currentTrack.name}
            </S.TrackPlayAuthorLink>
          </S.TrackPlayAuthor>
            ) : (
                 <S.SceletonPlayAuthor> </S.SceletonPlayAuthor>
            )}

          {isLoaded? (
            <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink>
            {currentTrack.author}
            </S.TrackPlayAlbumLink>
          </S.TrackPlayAlbum>
            ) : (
                 <S.SceletonPlayAlbum> </S.SceletonPlayAlbum>
            )}

          </S.TrackPlayerContain>
          <S.TrackPlayLikeDis>
            <S.TrackPlayLike>
              <S.TrackPlayLikeSvg alt="like">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackPlayLikeSvg>
            </S.TrackPlayLike>
            <S.TrackPlayDisLike>
              <S.TrackPlayDisLikeSvg alt="dislike">
                <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
              </S.TrackPlayDisLikeSvg>
            </S.TrackPlayDisLike>
          </S.TrackPlayLikeDis>
        </S.PlayerTrackPlay>
    )
  }
  