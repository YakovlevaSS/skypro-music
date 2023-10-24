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

//   const getShuffledAllTracks = (array) => {
//     const arrayTracks = new Array(...array);
//     return arrayTracks.sort(() => Math.random() - 0.5);
//   };

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

    //   prevTrack: (state, action) =>{
    //     state.currentTrack = action.payload
    //  },

    //  nextTrack: (state, action) =>{
    //     state.currentTrack = action.payload
    //  },

    toggleShuffled: (state, action) =>{
        const { shuffledPlaylist, shuffled } = action.payload
        state.shufflePlaylist = shuffledPlaylist
        state.shuffled = shuffled
        // state.shuffled = action.payload;
        // if (state.shuffled) {
        //   console.log("Shuffled", getShuffledAllTracks(state.tracks));
        // }
        // state.shuffledAllTracks =
        //   state.shuffled && getShuffledAllTracks(state.tracks);
    },
  }
  })
  export const {
    setTracksRedux,
    setCurrentTrackRedux,
    // prevTrack,
    // nextTrack,
    toggleShuffled
  } = playerSlice.actions

  export default playerSlice.reducer