/* eslint-disable import/prefer-default-export */
import * as S from './styles';
import { Search } from '../Search/Search'
import { Filter } from '../Filter/Filter'
import { PlayListTitle } from '../PlayListTitle/PlayListTitle'
import { PlayList } from '../PlayList/PlayList'

export function CenterBlock({ isLoaded }) {
    return (
        <S.MainCenterblock>
        <Search />
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <Filter />
        <S.CenterblockContent>
          <PlayListTitle />
          <PlayList isLoaded={ isLoaded }/>
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
    }