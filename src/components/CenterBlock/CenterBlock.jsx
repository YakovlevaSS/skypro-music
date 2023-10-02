import * as S from './styles';
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import PlayListTitle from '../PlayListTitle/PlayListTitle'
import PlayList from '../PlayList/PlayList'

function CenterBlock({ isLoaded, tracks, error, currentTrack, setCurrentTrack  }) {
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
          tracks={tracks}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          />
        )}
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
    }

    export default CenterBlock