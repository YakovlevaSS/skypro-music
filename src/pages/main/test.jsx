
import { useDispatch } from 'react-redux'
import {  useState } from 'react'
import * as S from './styles'
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter'
import PlayListTitle from '../../components/PlayListTitle/PlayListTitle'
import PlayList from '../../components/PlayList/PlayList'
// import { allTracksSelector } from '../../store/selectors/player'
import { useGetAllTracksQuery } from '../../services/player'
import { setCurrentPlaylist } from '../../store/slices/player'
// import { compare } from '../../utilits/helpToFilter'

export default function MainPage({ isPlaying }) {
  const dispatch = useDispatch()
  const { data = [], isError, isLoading } = useGetAllTracksQuery()
  // const [originalPlayList, setOriginalPlayList] = useState([])
  const [isActiveSortYear, setIsActiveSortYear] = useState('По умолчанию')
  const [isActiveFilterAuthor, setIsActiveFilterAuthor] = useState([])
  const [isActiveFilterGenre, setIsActiveFilterGenre] = useState([])
const [tracks, setTracks] = useState([])

 
  // setOriginalPlayList(data)

  // useEffect(()=> {
  //   let sortPlaylist = originalPlayList

  //   // Сортировка по дате
  //   if (isActiveSortYear === 'Сначала новые') {
  //     sortPlaylist = sortPlaylist?.sort(compare)
  //   } else if (isActiveSortYear === 'Сначала старые') {
  //     sortPlaylist = sortPlaylist?.sort(compare).reverse()
  //   }

  //   // Set sorted playList
  //   setTracks(sortPlaylist)
  //   dispatch(setCurrentPlaylist(sortPlaylist))
  // }, [isActiveSortYear, isActiveFilterAuthor, isActiveFilterGenre])
  setTracks(data)
  dispatch(setCurrentPlaylist(data))
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter 
              isActiveSortYear={isActiveSortYear}
              setIsAciveSortYear={setIsActiveSortYear}
              isActiveFilterAuthor={isActiveFilterAuthor}
              setIsActiveFilterAuthor={setIsActiveFilterAuthor}
              isActiveFilterGenre={isActiveFilterGenre}
              setIsActiveFilterGenre={setIsActiveFilterGenre}
      />
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
            isLoading={isLoading}
            isPlaying={isPlaying}
            tracks={tracks}
          />
        )}
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

