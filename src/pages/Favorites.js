import React from 'react';
import Header from '../components/Header';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import Load from './Load';
import '../css/album.css';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      load: false,
      listFavorites: [],
    };

    this.returnFavorite = this.returnFavorite.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.returnFavorite();
  }

  async remove(music) {
    this.setState({ load: true });
    await removeSong(music);
    const { listFavorites } = this.state;
    const filterRemove = listFavorites.filter((fav) => fav.trackId !== music.trackId);

    this.setState(
      { listFavorites: filterRemove, load: false },
    );
  }

  async returnFavorite() {
    this.setState({ load: true });

    await getFavoriteSongs()
      .then((data) => this.setState({ listFavorites: data }));

    this.setState({ load: false });
  }

  render() {
    const { load, listFavorites } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        { load && <Load /> }
        <div className="albumFav">
          {
            listFavorites
              .map((music) => (
                <MusicCard
                  key={ music.trackId }
                  musica={ music }
                  onClick={ this.remove }
                  listFavorites={ listFavorites }
                  load={ load }
                />
              ))
          }
        </div>
      </div>
    );
  }
}

// Feito com a ajuda Fumagalli e João Veidz

export default Favorites;
