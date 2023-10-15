export const trackSelector = (store) => store.player;

export const isPlayingTrackSelector = (store) => store.player.playingTrack

export const shuffledSelector = (store) => store.player.shuffled

export const shuffledPlaylistSelector = (store) => store.player.shuffledPlaylist

export const allTracksSelector = (store) => store.player.tracks

export const currentTrackSelector = (store) => store.player.track

