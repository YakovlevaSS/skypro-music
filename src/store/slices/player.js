/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playingTrack: false,
  // currentTrack: null,
  shuffled: false,
  shufflePlaylist: [],
  tracks: [],
  track: null,
  currentPlaylist: [],
  activePlaylist: [],
}

export const playerSlice = createSlice({
  name: 'tracksReducer',
  initialState,

  reducers: {
    setTracksRedux: (state, action) => {
      state.tracks = action.payload
    },

    setCurrentTrackRedux: (state, action) => {
      state.track = action.payload
      state.playingTrack = true
    },

    setShuffledTracks: (state, action) => {
      state.shufflePlaylist = action.payload
    },

    setIsShuffled: (state, action) => {
      state.shuffled = action.payload
    },

    toggleShuffled: (state, action) => {
      const { shuffled, shufflePlaylist } = action.payload
      state.shuffled = shuffled
      state.shufflePlaylist = shufflePlaylist
    },
    setCurrentPlaylist : (state, action) => {
      state.currentPlaylist = action.payload
    },
    setActivePlaylist : (state, action) => {
      state.activePlaylist = action.payload
    },
  },
})
export const {
  setTracksRedux,
  setCurrentTrackRedux,
toggleShuffled,
setActivePlaylist,
setCurrentPlaylist

} = playerSlice.actions

export default playerSlice.reducer
