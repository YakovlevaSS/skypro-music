/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom'
import Bar from '../../components/Bar/Bar'
import Nav from '../../components/Nav/Nav'
import SideBar from '../../components/SideBar/SidBar'
import Footer from '../../components/Footer/Footer'
import { getAllTracks} from '../../Api/api'
import { setTracksRedux } from '../../store/action/creator/player'
import { currentTrackSelector } from '../../store/selectors/player';

import * as S from './styles'

function PageLayout(setError, setIsPlaying, isLoaded, isPlaying, error, setIsLoaded) {

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoaded(false)
    getAllTracks()
      .then((tracksArr) => {
        dispatch(setTracksRedux(tracksArr));
    })      
    .catch ((curenterror) => {
      setError(curenterror.message);
    })
    .finally(() => {
      setIsLoaded(true);
    });

  }, [])
  const currentTrack = useSelector(currentTrackSelector)

  return (
        <S.Wrapper>
          <S.Container>
            <S.Content>
              <Nav />
              {/* <CenterBlock 
              isLoaded={isLoaded}
              tracks={tracks} 
              error={error}
              currentTrack={currentTrack}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              pause={pause}
              /> */}
               <Outlet />
              <SideBar isLoaded={isLoaded}/>
            </S.Content>
            {currentTrack && (
            <Bar 
            isLoaded={isLoaded}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            error={error}
            />
            )}
            <Footer />
          </S.Container>
        </S.Wrapper>
  )
}

export default PageLayout