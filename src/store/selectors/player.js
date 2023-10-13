export const trackSelector = (store) => store.player;

export const currentTrackSelector = (store) => store.player.currentTrack;

export const isPlayingTrackSelector = (store) => store.player.playingTrack

export const shuffledSelector = (store) => store.player.shuffled

export const shuffledPlaylistSelector = (store) => store.player.shuffledPlaylist

