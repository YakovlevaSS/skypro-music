/* eslint-disable import/order */
/* eslint-disable react/jsx-boolean-value */
import { 
  // useEffect, 
  useState
} from 'react';
import * as S from './styles';
import { useSelector, useDispatch} from 'react-redux';
import { useGetAllMyTracksQuery  } from '../../services/player';
import Search from '../../components/Search/Search'
import PlayListTitle from '../../components/PlayListTitle/PlayListTitle'
import PlayList from '../../components/PlayList/PlayList'
import { authSelector } from '../../store/selectors/player';
import { setCurrentPlaylist } from '../../store/slices/player';





export default function Favorites({ isPlaying, setIsPlaying}) { 
  const dispatch = useDispatch()
const auth = useSelector(authSelector)
const {data = [], isLoading, isError} = useGetAllMyTracksQuery({auth})
// const tracks = data
// useEffect(() => {
//   dispatch(setCurrentPlaylist(data))
// }, [data])

const [searchValue, setSearchValue] = useState('')
  const filterTracks = () => {
    let sortPlaylist = data
  
    if (searchValue) {
      sortPlaylist = sortPlaylist?.filter((track) =>
      track.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    }
    return sortPlaylist
  }

const sortPlaylist = filterTracks()
dispatch(setCurrentPlaylist(sortPlaylist))

  return (
        <S.MainCenterblock>
        <Search setSearchValue={setSearchValue}/>
        <S.CenterblockH2>Мои треки</S.CenterblockH2>
        <S.CenterblockContent>
          <PlayListTitle />

          {isError ? (
          <S.ErrorBlock>
            <S.ErrorMessage>
              Не удалось загрузить плейлист, попробуйте позже
            </S.ErrorMessage>
          </S.ErrorBlock>
        ) : (
          <PlayList 
          isLoading={ isLoading }
          isPlaying={isPlaying}
          isFavorites={true}
          tracks={sortPlaylist}
          setIsPlaying={setIsPlaying}
          />
        )}
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
    }