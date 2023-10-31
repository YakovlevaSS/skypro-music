/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter'
import PlayListTitle from '../../components/PlayListTitle/PlayListTitle'
import PlayList from '../../components/PlayList/PlayList'
// import { allTracksSelector } from '../../store/selectors/player';
import { useGetAllTracksQuery } from '../../services/player'
import { setCurrentPlaylist } from '../../store/slices/player'
import { compare } from '../../utilits/helpToFilter'  

export default function MainPage({ isPlaying }) {
  const dispatch = useDispatch()
  const { data = [], isError, isLoading } = useGetAllTracksQuery()
  // const [tracks, setTracks] = useState([])
  // const [originalPlayList, setOriginalPlayList] = useState([])
  const [isActiveSortYear, setIsActiveSortYear] = useState('По умолчанию')
  const [activeFilterAuthor, setActiveFilterAuthor] = useState(['author1', "author2"])
  const [activeFilterGenre, setActiveFilterGenre] = useState([])
  
  dispatch(setCurrentPlaylist(data))

const originalPlayList = data
let sortPlaylist = originalPlayList

  useEffect(()=> {
    
    // Сортировка по дате
    if (isActiveSortYear === 'Сначала новые') {
      sortPlaylist = sortPlaylist?.slice(0).sort(compare)
    } else if (isActiveSortYear === 'Сначала старые') {
      sortPlaylist = sortPlaylist?.slice(0).sort(compare).reverse()
    }


    console.log(sortPlaylist);

// sortPlaylist = sortPlaylist?.filter((track) => (activeFilterAuthor.includes(track.author)) )
    // Set sorted playList
    dispatch(setCurrentPlaylist(sortPlaylist))
  }, [isActiveSortYear, activeFilterAuthor, activeFilterGenre])
  
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter 
                   isActiveSortYear={isActiveSortYear}
                   setIsActiveSortYear={setIsActiveSortYear}
                   isActiveFilterAuthor={activeFilterAuthor}
                   setIsActiveFilterAuthor={setActiveFilterAuthor}
                   isActiveFilterGenre={activeFilterGenre}
                   setIsActiveFilterGenre={setActiveFilterGenre}/>
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
            tracks={sortPlaylist}
          />
        )}
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
