import React from 'react';
import PropTypes from 'prop-types';
import './musicCard.css';

class MusicCard extends React.Component {
  render() {
    const {
      listFavorites,
      onClick,
      musica,
      musica:
        {
          trackName,
          trackId,
          previewUrl,
        },
    } = this.props;

    return (
      <div className="musicas">
        <div className="track">
          <div className="text ">
            <p>
              { trackName }
            </p>
            <label htmlFor="fav">
              Favorita
              <input
                id="fav"
                type="checkbox"
                name={ trackId }
                data-testid={ `checkbox-music-${trackId}` }
                onChange={ () => onClick(musica) }
                checked={
                  listFavorites.some((musicaFav) => musicaFav.trackId === trackId)
                }
              />
            </label>
          </div>

          <div className="content-sound">
            <audio
              data-testid="audio-component"
              src={ previewUrl }
              controls
            >
              <track kind="captions" />
            </audio>
          </div>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musica: PropTypes.string.isRequired,
  listFavorites: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MusicCard;
