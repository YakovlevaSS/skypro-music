/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import TrackItem from "../TrackItem/TrackItem"
import * as S from './styles'

export default function PlayList({ isLoading, isPlaying, tracks }) {
    return (<S.ContentPlaylist>             
 {isLoading &&
            Array(20)
              .fill()
              .map(() => <TrackItem key={Math.random()} isLoading={isLoading}/>)} 
      {tracks?.length > 0? (tracks.map((track) => (
                 <TrackItem
                 key={track.id}
                  isLoading={isLoading}
                  isPlaying={isPlaying}
                  track={track}
                  tracks={tracks}
                />
              ))
            ) : (
              <h2>Ничего не найдено</h2>
            )
    }</S.ContentPlaylist>)
  }

