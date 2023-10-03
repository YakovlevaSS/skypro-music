/* eslint-disable consistent-return */
import { useState, useEffect } from 'react'
import Bar from '../../components/Bar/Bar'
import CenterBlock from '../../components/CenterBlock/CenterBlock'
import Nav from '../../components/Nav/Nav'
import SideBar from '../../components/SideBar/SidBar'
import Footer from '../../components/Footer/Footer'
import trackArr from '../../utilits/trackArr'
import { getAllTracks } from '../../api'

import * as S from './styles'

function Main() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [tracks, setTrackArr] = useState(trackArr)
  const [error, setError] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    setIsLoaded(false)
    getAllTracks()
      .then((tracksArr) => {
      setTrackArr(tracksArr)
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
              setCurrentTrack={setCurrentTrack}
              />

              <SideBar isLoaded={isLoaded} />
            </S.Content>
            {currentTrack && (
            <Bar 
            isLoaded={isLoaded}
            currentTrack={currentTrack}
            />
            )}
            <Footer />
          </S.Container>
        </S.Wrapper>
  )
}

export default Main