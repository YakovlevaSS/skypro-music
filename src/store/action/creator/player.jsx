import { 
    SHUFFLE_TRACKS,
    NEXT_TRACK,
    PREV_TRACK, 
    SET_CURRENT_TRACK,

} from "../types/player";

export const nextTrack = (track) => ({
    type: NEXT_TRACK,
    payload: { track },
  });
  
  export const prevTrack = (track) => ({
    type: PREV_TRACK,
    payload: { track },
  });
  export const currentTrack = (track) => ({
    type: SET_CURRENT_TRACK,
    payload: { track },
  });

  export const toggleShuffled = (shuffledPlaylist, shuffled) => ({
    type: SHUFFLE_TRACKS ,
    payload: {
      shuffledPlaylist,
      shuffled,
    },
  });
