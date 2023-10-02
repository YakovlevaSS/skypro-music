import * as S from './styles';
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import PlayListTitle from '../PlayListTitle/PlayListTitle'
import PlayList from '../PlayList/PlayList'

function CenterBlock({ isLoaded, tracks  }) {
    return (
        <S.MainCenterblock>
        <Search />
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <Filter />
        <S.CenterblockContent>
          <PlayListTitle />
          <PlayList 
          isLoaded={ isLoaded }
          tracks={tracks}
          />
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
    }

    export default CenterBlock