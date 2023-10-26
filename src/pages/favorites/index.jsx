/* eslint-disable import/order */
/* eslint-disable react/jsx-boolean-value */
import * as S from './styles';
import { useSelector } from 'react-redux';
import { useGetAllMyTracksQuery  } from '../../services/player';
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter';
import PlayListTitle from '../../components/PlayListTitle/PlayListTitle'
import PlayList from '../../components/PlayList/PlayList'
import { authSelector } from '../../store/selectors/player';



export default function Favorites({ isPlaying}) { 
const auth = useSelector(authSelector)
const {data = [], isLoading, isError} = useGetAllMyTracksQuery({auth})
const tracks = data

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