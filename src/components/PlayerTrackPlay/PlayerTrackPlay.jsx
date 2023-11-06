/* eslint-disable import/no-extraneous-dependencies */
import { useSelector} from 'react-redux';
import { useState } from 'react';
import { currentTrackSelector } from '../../store/selectors/player'
import { useLikeTrackMutation, useDislikeTrackMutation } from '../../services/player';
import * as S from './styles'

export default function PlayerTrackPlay({isLoading}) {

  const currentTrack = useSelector(currentTrackSelector)
  const [isLiked, setIsLiked] = useState(false)

  const [like] = useLikeTrackMutation()
  const [dislike] = useDislikeTrackMutation()

  // useEffect(() => {
  //   setIsLiked(isUserLike)
  // }, [isUserLike])


  const handleLike = async (id) => {
    setIsLiked(true)
    await like({ id }).unwrap()
  }

  const handleDislike = async (id) => {
    setIsLiked(false)
    await dislike({ id }).unwrap()
  }

  // const toggleLikeDislike = (id) =>
  //   isLiked ? handleDislike(id) : handleLike(id)
  
  return (
        <S.PlayerTrackPlay>
          <S.TrackPlayerContain>

          {!isLoading? (
            <S.TrackPlayerImage>
            <S.TrackPlaySvg alt="music">
              <use xlinkHref="/img/icon/sprite.svg#icon-note" />
            </S.TrackPlaySvg>
          </S.TrackPlayerImage>
            ) : (
                 <S.SceletonPlayerImage> </S.SceletonPlayerImage>
            )}

          {!isLoading? (
            <S.TrackPlayAuthor>
            <S.TrackPlayAuthorLink>
            {currentTrack?.name}
            </S.TrackPlayAuthorLink>
          </S.TrackPlayAuthor>
            ) : (
                 <S.SceletonPlayAuthor> </S.SceletonPlayAuthor>
            )}

          {!isLoading? (
            <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink>
            {currentTrack?.author}
            </S.TrackPlayAlbumLink>
          </S.TrackPlayAlbum>
            ) : (
                 <S.SceletonPlayAlbum> </S.SceletonPlayAlbum>
            )}

          </S.TrackPlayerContain>
          <S.TrackPlayLikeDis>
            <S.TrackPlayLike>
              <S.TrackPlayLikeSvg alt="like" onClick={() => handleLike(currentTrack?.id)}>
              {isLiked ? (
                    <use
                      xlinkHref="/img/icon/sprite.svg#icon-like"
                      fill="#B672FF"
                     />
                  ) : (
                  <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                  )}
              </S.TrackPlayLikeSvg>
            </S.TrackPlayLike>
            <S.TrackPlayDisLike>
              <S.TrackPlayDisLikeSvg alt="dislike" onClick={() => handleDislike(currentTrack?.id)}>
                <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
              </S.TrackPlayDisLikeSvg>
            </S.TrackPlayDisLike>
          </S.TrackPlayLikeDis>
        </S.PlayerTrackPlay>
    )
  }
  