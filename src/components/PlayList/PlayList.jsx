/* eslint-disable import/no-extraneous-dependencies */
// import { useState } from 'react'
import { useSelector, useDispatch, 
  // useState 
} from 'react-redux'
import * as S from './styles'
import getDuration from '../../utilits/getduration'
import { currentTrackSelector } from '../../store/selectors/player'
import { setCurrentTrackRedux } from '../../store/slices/player'
import {
  useLikeTrackMutation,
  useDislikeTrackMutation,
} from '../../services/player'
// } from '../../store/action/creator/player'

export default function PlayList({ isLoading, isPlaying, tracks }) {
  const dispatch = useDispatch()
  const currentTrack = useSelector(currentTrackSelector)

  const handleCurrentTrack = (track) => {
    dispatch(setCurrentTrackRedux(track))
  }
  const [like] = useLikeTrackMutation()
  const [dislike] = useDislikeTrackMutation()
  const auth = localStorage.getItem('user')
  console.log(like, dislike, auth)

  // const isUserLike = Boolean(
  //   track.stared_user.find(({ id }) => id === auth.id),
  // )
  // console.log(isUserLike)
  // const [isLiked, setIsLiked] = useState()

  // useEffect(() => {
  //   setIsLiked(isUserLike)
  // }, [isUserLike])

  // const handleLike = async (id) => {
  //   setIsLiked(true)
  //   await like({ id }).unwrap()
  //   dispatch(
  //     setCurrentTracks({
  //       id,
  //     }),
  //   )
  //   dispatch(setNewTracks(song))
  // }

  // const handleDislike = async (id) => {
  //   setIsLiked(false)
  //   await dislike({ id }).unwrap()
  //   dispatch(
  //     setCurrentTracks({
  //       id,
  //     }),
  //   )
  //   dispatch(setNewTracks(song))
  // }

  // const toggleLikeDislike = (id) =>
  //   isLiked ? handleDislike(id) : handleLike(id)

  // const allTracks = useSelector(allTracksSelector)
  // const favoritesTracks = []
  // const [tracks, setTracks] = useState([])
  // if (!isFavorites) {
  //   setTracks(allTracks)
  // } else {
  //   setTracks(favoritesTracks)
  // }

  // const tracks = useSelector(allTracksSelector)

  if (tracks?.length > 0) {
    const fullPlayList = tracks.map((track) => (
      <S.PlaylistItem key={track.id} onClick={() => handleCurrentTrack(track)}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            {!isLoading ? (
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  {currentTrack && currentTrack.id === track.id ? (
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

            {!isLoading ? (
              <S.TrackTitleText>
                <S.TrackTitleLink>
                  {track.name} <S.TrackTitleSpan />
                </S.TrackTitleLink>
              </S.TrackTitleText>
            ) : (
              <S.SkeletonTitle> </S.SkeletonTitle>
            )}
          </S.TrackTitle>

          {!isLoading ? (
            <S.TrackAuthor>
              <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
            </S.TrackAuthor>
          ) : (
            <S.SkeletonAuthor> </S.SkeletonAuthor>
          )}

          {!isLoading ? (
            <>
              <S.TrackAlbum>
                <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
              </S.TrackAlbum>
              <S.TrackTime>
                <S.TrackTimeSvg
                  alt="time"
                  // onClick={() => {
                  //   toggleLikeDislike(track.id)
                  // }}
                >
                  {/* {isLiked ? (
                    <use
                      xlinkHref="img/icon/sprite.svg#icon-like"
                      fill="#B672FF"
                     />
                  ) : ( */}
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  {/* )} */}
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
