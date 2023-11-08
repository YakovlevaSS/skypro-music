/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable react/jsx-boolean-value */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';
import { useDispatch} from 'react-redux';
import { useGetSelectionByIdQuery } from '../../services/player';
import Search from '../../components/Search/Search'
import PlayListTitle from '../../components/PlayListTitle/PlayListTitle'
import PlayList from '../../components/PlayList/PlayList'
// import { authSelector } from '../../store/selectors/player';
import { setCurrentPlaylist } from '../../store/slices/player';


export default function Category({ isPlaying}) { 
  const params = useParams();
  const dispatch = useDispatch()
const {data = [], isLoading, isError} = useGetSelectionByIdQuery(Number(params.id))
// const tracks = data.items
// useEffect(() => {
//   dispatch(setCurrentPlaylist(tracks))
// }, [data])

const [searchValue, setSearchValue] = useState('')
  const filterTracks = () => {
    let sortPlaylist = data.items
  
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
        <S.CenterblockH2>{data?.name}</S.CenterblockH2>
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
          />
        )}
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
    }