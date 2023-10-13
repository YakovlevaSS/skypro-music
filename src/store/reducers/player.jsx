/* eslint-disable default-param-last */
import { 
    SHUFFLE_TRACKS,
    NEXT_TRACK,
    PREV_TRACK, 
    SET_CURRENT_TRACK,
} from "../action/types/player";

const initialState = {
    playingTrack: false,
    currentTrack: null,
    shuffled: false,
    shufflePlaylist: [],
  };

  export default function trackReducer(state = initialState, action) {
    
    switch (action.type) {
      case SET_CURRENT_TRACK: {
        const { track } = action.payload;
        return {
          ...state,
          currentTrack: track,
          playingTrack: true,
        };
      }

      case NEXT_TRACK: {
        const { track } = action.payload;
        return {
          ...state,
          currentTrack: track,
        };
      }

      case PREV_TRACK: {
        const { track } = action.payload;
        return {
          ...state,
          currentTrack: track,
        };
      }

      case SHUFFLE_TRACKS: {
        const { shuffledPlaylist, shuffled } = action.payload;
        return {
          ...state,
          shuffled: !shuffled,
          shuffledPlaylist,
        };
      }

      // case SET_PLAYLIST: {
      //   const { playlist} = action.payload;
      //   return {
      //     ...state,
      //     playlist,
      //   };
      // }

      default:
        return state;
    }
  }

