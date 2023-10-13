export const trackSelector = (store) => store.player;

export const currentTrackSelector = (store) => store.player.currentTrack;

export const isPlayingTrackSelector = (store) => store.player.playingTrack

// export const trackIdsSelector = (store) => trackSelector(store)?.id || [];
