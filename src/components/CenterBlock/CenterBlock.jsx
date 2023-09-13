/* eslint-disable import/prefer-default-export */
import './centerBlock.css'
import { Search } from '../Search/Search'
import { Filter } from '../Filter/Filter'
import { PlayListTitle } from '../PlayListTitle/PlayListTitle'
import { PlayList } from '../PlayList/PlayList'

export function CenterBlock({ isLoaded }) {
    return (
        <div className="main__centerblock centerblock">
        <Search />
        <h2 className="centerblock__h2">Треки</h2>
        <Filter />
        <div className="centerblock__content">
          <PlayListTitle />
          <PlayList isLoaded={ isLoaded }/>
        </div>
      </div>
    )
    }