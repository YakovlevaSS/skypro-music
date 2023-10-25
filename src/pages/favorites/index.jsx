/* eslint-disable react/jsx-boolean-value */
import * as S from './styles';
import { useGetAllTracksQuery } from '../../services/player';
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter';
import PlayListTitle from '../../components/PlayListTitle/PlayListTitle'
import PlayList from '../../components/PlayList/PlayList'

export default function Favorites({ isLoading, isPlaying}) { 
  const {isError} = useGetAllTracksQuery
  const tracks = []
  return (
        <S.MainCenterblock>
        <Search />
        <S.CenterblockH2>Мои треки</S.CenterblockH2>
        <Filter />
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
          tracks={tracks}
          />
        )}
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
    }