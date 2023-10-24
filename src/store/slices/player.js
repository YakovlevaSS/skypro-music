/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    playingTrack: false,
    // currentTrack: null,
    shuffled: false,
    shufflePlaylist: [],
    tracks: [],
    track: null,
  }

  export const playerSlice = createSlice({
    name: "tracksReducer",
  initialState,

  reducers: {
    setTracksRedux: (state, action) =>{
        state.tracks = action.payload
     },

     setCurrentTrackRedux: (state, action) => {
        state.track = action.payload
        state.playingTrack = true
      },

    setShuffledTracks: (state, action) => {
state.shufflePlaylist = action.payload
    },

    setIsShuffled: (state, action) =>{
        state.shuffled = action.payload
    },
  }
  })
  export const {
    setTracksRedux,
    setCurrentTrackRedux,
    setShuffledTracks,
    setIsShuffled,
  } = playerSlice.actions

  export default playerSlice.reducer