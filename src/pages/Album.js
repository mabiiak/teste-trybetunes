import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Header from '../services/components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../services/components/MusicCard';
import Load from './Load';
import '../css/album.css';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      infoAboutAlbum: [],
      listFavorites: [],
      load: false,
    };

    this.findMusics = this.findMusics.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.returnFavorite = this.returnFavorite.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    this.findMusics(id);
    this.returnFavorite();
  }

  async addFavorite(music) {
    // Feito com a ajuda Fumagalli

    this.setState({ load: true });

    const desespero = await getFavoriteSongs();
    const find = desespero.find((fav) => fav.trackId === music.trackId);

    if (!find) {
      await addSong(music);

      this.setState((prevState) => {
        this.setState(
          { listFavorites: [...prevState.listFavorites, music] },
        );
      });
    } else {
      await removeSong(music);
      const { listFavorites } = this.state;
      const filterRemove = listFavorites.filter((fav) => fav.trackId !== music.trackId);

      this.setState(
        { listFavorites: filterRemove },
      );
    }

    this.setState({ load: false });
  }

  async returnFavorite() {
    await getFavoriteSongs()
      .then((data) => this.setState({ listFavorites: data }));
  }

  async findMusics(id) {
    const musicFromAlbum = await getMusics(id);

    this.setState({ infoAboutAlbum: musicFromAlbum });
  }

  render() {
    const { infoAboutAlbum, load, listFavorites } = this.state;
    const item = infoAboutAlbum[0];
    return (
      <div data-testid="page-album">
        <Header />
        <div className="album">
          { load && <Load />}
          <img
            src={ Object(item).artworkUrl100 }
            alt={ Object(item).collectionName }
          />
          <div className="title-text">
            <h2 data-testid="artist-name">
              { Object(item).artistName }
            </h2>

            <p data-testid="album-name">
              { Object(item).collectionName }
            </p>
          </div>
          <div className="soundAlbum">
            {
              infoAboutAlbum.filter((music) => music.kind)
                .map((music) => (
                  <MusicCard
                    key={ music.trackId }
                    musica={ music }
                    onClick={ this.addFavorite }
                    load={ load }
                    listFavorites={ listFavorites }
                  />
                ))
            }
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.string.isRequired,
};

export default Album;
