/* eslint-disable import/no-extraneous-dependencies */
import { useSelector} from 'react-redux'
import * as S from './styles';
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter';
import PlayListTitle from '../../components/PlayListTitle/PlayListTitle'
import PlayList from '../../components/PlayList/PlayList'
import { allTracksSelector } from '../../store/selectors/player';

export default function MainPage ({ isLoaded, error, isPlaying }) {
  const tracks = useSelector(allTracksSelector)
  return (
        <S.MainCenterblock>
        <Search />
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <Filter />
        <S.CenterblockContent>
          <PlayListTitle />

          {error ? (
          <S.ErrorBlock>
            <S.ErrorMessage>
              Не удалось загрузить плейлист, попробуйте позже: {error}
            </S.ErrorMessage>
          </S.ErrorBlock>
        ) : (
          <PlayList 
          isLoaded={ isLoaded }
          isPlaying={isPlaying}
          tracks={tracks}
          />
        )}
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
    }