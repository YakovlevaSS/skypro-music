import { useEffect, useState } from 'react'
import * as S from './styles'
import trackArr from '../../utilits/trackArr'
import { getAllTracks } from '../../api'


export default function PlayList({ isLoaded }) {

  const [tracks, setTrackArr] = useState(trackArr)

  useEffect(() => {
    getAllTracks().then((tracksArr) => {
      console.log(tracksArr)
      setTrackArr(tracksArr)
    })
  }, [])

  const fullPlayList = tracks.map((track) => (
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
                {track.name} <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </S.TrackTitleText>
          ) : (
            <S.SkeletonTitle> </S.SkeletonTitle>
          )}
        </S.TrackTitle>

        {isLoaded ? (
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
              {track.author}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
        ) : (
          <S.SkeletonAuthor> </S.SkeletonAuthor>
        )}

        {isLoaded ? (
          <>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
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
