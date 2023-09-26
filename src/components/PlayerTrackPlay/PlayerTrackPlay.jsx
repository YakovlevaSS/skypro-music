import * as S from './styles'

/* eslint-disable import/prefer-default-export */
export function PlayerTrackPlay({isLoaded}) {
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
            <S.TrackPlayAuthorLink href="http://">
              Ты та...
            </S.TrackPlayAuthorLink>
          </S.TrackPlayAuthor>
            ) : (
                 <S.SceletonPlayAuthor> </S.SceletonPlayAuthor>
            )}

          {isLoaded? (
            <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink href="http://">
              Баста
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
  