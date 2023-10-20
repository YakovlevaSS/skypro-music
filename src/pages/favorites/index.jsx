/* eslint-disable react/jsx-boolean-value */
import * as S from './styles';
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter';
import PlayListTitle from '../../components/PlayListTitle/PlayListTitle'
import PlayList from '../../components/PlayList/PlayList'

export default function Favorites({ isLoaded, error, isPlaying}) { 
  const tracks = []
  return (
        <S.MainCenterblock>
        <Search />
        <S.CenterblockH2>Мои треки</S.CenterblockH2>
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
          isFavorites={true}
          tracks={tracks}
          />
        )}
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
    }