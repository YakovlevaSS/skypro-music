/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import Bar from '../../components/Bar/Bar'
import CenterBlock from '../../components/CenterBlock/CenterBlock'
import Nav from '../../components/Nav/Nav'
import SideBar from '../../components/SideBar/SidBar'
import Footer from '../../components/Footer/Footer'
import trackArr from '../../utilits/trackArr'
import { getAllTracks} from '../../Api/api'
import { setTracksRedux } from '../../store/action/creator/player'

import * as S from './styles'

function Main() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [tracks,] = useState(trackArr)
  const [error, setError] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTrackID, setCurrentTrackID] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true)
  const [pause, setPause] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoaded(false)
    getAllTracks()
      .then((tracksArr) => {
        dispatch(setTracksRedux(tracksArr));
      // setTrackArr(tracksArr)
    })      
    .catch ((curenterror) => {
      setError(curenterror.message);
    })
    .finally(() => {
      setIsLoaded(true);
    });

  }, [])

  // useEffect(() => {
  //   if (!isLoaded) {
  //     const timeout = setTimeout(() => {
  //       setIsLoaded(true)
  //     }, 5000)

  //     return () => clearTimeout(timeout)
  //   }
  // }, [isLoaded])
  return (
        <S.Wrapper>
          <S.Container>
            <S.Content>
              <Nav />
              <CenterBlock 
              isLoaded={isLoaded}
              tracks={tracks} 
              error={error}
              currentTrack={currentTrack}
              setCurrentTrackID={setCurrentTrackID}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentTrackID={currentTrackID}
              pause={pause}
              />

              <SideBar isLoaded={isLoaded}/>
            </S.Content>
            {currentTrackID && (
            <Bar 
            isLoaded={isLoaded}
            tracks={tracks} 
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTrackID={currentTrackID}
            setCurrentTrack={setCurrentTrack}
            setPause={setPause}
            />
            )}
            <Footer />
          </S.Container>
        </S.Wrapper>
  )
}

export default Main