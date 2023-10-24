/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom'
import Bar from '../../components/Bar/Bar'
import Nav from '../../components/Nav/Nav'
import SideBar from '../../components/SideBar/SidBar'
import Footer from '../../components/Footer/Footer'
// import { getAllTracks} from '../../Api/api'
import { setTracksRedux 
} from '../../store/slices/player'
// } from '../../store/action/creator/player'
import { currentTrackSelector } from '../../store/selectors/player';
import { useGetAllTracksQuery } from '../../services/player';

import * as S from './styles'

function PageLayout({ setIsPlaying, isPlaying}) {

  const dispatch = useDispatch();
  const {data, isLoading } = useGetAllTracksQuery()

  // useEffect(() => {
  //   setIsLoaded(false)
  //   getAllTracks()
  //     .then((tracksArr) => {
  //       dispatch(setTracksRedux(tracksArr));
  //   })      
  //   .catch ((curenterror) => {
  //     setError(curenterror.message);
  //   })
  //   .finally(() => {
  //     setIsLoaded(true);
  //   });

  // }, [])
  useEffect(() => {
    if (data) {
      dispatch(setTracksRedux(data));
    }
  }, [data]);
  

  const currentTrack = useSelector(currentTrackSelector)

  return (
        <S.Wrapper>
          <S.Container>
            <S.Content>
              <Nav />
               <Outlet />
              <SideBar isLoading={isLoading}/>
            </S.Content>
            {currentTrack && (
            <Bar 
            isLoading={isLoading}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            />
            )}
            <Footer />
          </S.Container>
        </S.Wrapper>
  )
}

export default PageLayout