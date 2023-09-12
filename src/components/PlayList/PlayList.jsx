import './playList.css'
import { trackArr } from "../../utilits/trackArr";

// eslint-disable-next-line import/prefer-default-export
export function PlayList({isLoaded}) {
    const fullPlayList = trackArr.map(track =>
          <li key={track.id} className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">

            {
            isLoaded? (
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>) : (
               <div className="skeleton__title-image"> </div>
            )}

            {isLoaded? (
                          <div className="track__title-text">
                          <a className="track__title-link" href="http://">
                            {track.trackTitleLink.title} <span className="track__title-span" />
                          </a>
                        </div>
            ) : (
                 <div className="skeleton__title"> </div>
            )}
          </div>

          {isLoaded? (
          <div className="track__author">
          <a className="track__author-link" href="http://">
            {track.trackAuthorLink}
          </a>
        </div>
            ) : (
                 <div className="skeleton__author"> </div>
            )}

           {isLoaded? (
          <><div className="track__album">
              <a className="track__album-link" href="http://">
                {track.trackAlbumLink}
              </a>
            </div><div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">{track.trackTimeText}</span>
              </div></>
            ) : (
                 <div className="skeleton__album"> </div>
            )}

        </div>
      </li>
);
return <ul className="content__playlist">{fullPlayList}</ul>;
}