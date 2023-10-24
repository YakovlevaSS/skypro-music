/* eslint-disable import/no-extraneous-dependencies */
import { useSelector} from 'react-redux'
import * as S from './styles';
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter';
import PlayListTitle from '../../components/PlayListTitle/PlayListTitle'
import PlayList from '../../components/PlayList/PlayList'
import { allTracksSelector } from '../../store/selectors/player';
import { useGetAllTracksQuery } from '../../services/player';

export default function MainPage ({ isLoading, isPlaying }) {
  const tracks = useSelector(allTracksSelector)
  const {isError} = useGetAllTracksQuery
  return (
        <S.MainCenterblock>
        <Search />
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <Filter />
        <S.CenterblockContent>
          <PlayListTitle />

          {isError? (
          <S.ErrorBlock>
            <S.ErrorMessage>
              Не удалось загрузить плейлист, попробуйте позже
            </S.ErrorMessage>
          </S.ErrorBlock>
        ) : (
          <PlayList 
          isLoading={ isLoading }
          isPlaying={isPlaying}
          tracks={tracks}
          />
        )}
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
    }