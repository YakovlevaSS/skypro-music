import './playerTrackPlay.css'
/* eslint-disable import/prefer-default-export */
export function PlayerTrackPlay({isLoaded}) {
    return (
        <div className="player__track-play track-play">
          <div className="track-play__contain">

          {isLoaded? (
            <div className="track-play__image">
            <svg className="track-play__svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
            ) : (
                 <div className="skeleton-play__image"> </div>
            )}

          {isLoaded? (
            <div className="track-play__author">
            <a className="track-play__author-link" href="http://">
              Ты та...
            </a>
          </div>
            ) : (
                 <div className="skeleton-play__author"> </div>
            )}

          {isLoaded? (
            <div className="track-play__album">
            <a className="track-play__album-link" href="http://">
              Баста
            </a>
          </div>
            ) : (
                 <div className="skeleton-play__album"> </div>
            )}

          </div>
          <div className="track-play__like-dis">
            <div className="track-play__like _btn-icon">
              <svg className="track-play__like-svg" alt="like">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </svg>
            </div>
            <div className="track-play__dislike _btn-icon">
              <svg className="track-play__dislike-svg" alt="dislike">
                <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
              </svg>
            </div>
          </div>
        </div>
    )
  }
  