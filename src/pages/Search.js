import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../css/search.css';

import searchAlbumsAPIs from '../services/searchAlbumsAPI';
import Load from './Load';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      nameFind: '',
      offButton: true,
      waitAPI: 'false',
      artist: '',
      find: '',
    };

    this.validadeButton = this.validadeButton.bind(this);
    this.searchButton = this.searchButton.bind(this);
  }

  validadeButton({ target }) {
    const { nameFind } = this.state;
    const { value } = target;

    this.setState({ nameFind: value });

    if (nameFind.length >= 1) {
      this.setState({ offButton: false });
    } else {
      this.setState({ offButton: true });
    }
  }

  async searchButton() {
    const { nameFind } = this.state;

    this.setState({ waitAPI: 'true' });

    const findArtist = await searchAlbumsAPIs(nameFind);

    this.setState({ find: nameFind });
    this.setState({ nameFind: '' });
    this.setState({ waitAPI: 'ok' });

    this.setState({ artist: findArtist });
  }

  render() {
    const { offButton, nameFind, waitAPI, artist, find } = this.state;

    const filterArtist = (
      Object.values(artist).map((artistfind) => (
        <div
          key={ artistfind.collectionId }
          className="allAbuns"
        >
          <Link
            data-testid={ `link-to-album-${artistfind.collectionId}` }
            to={ `/album/${artistfind.collectionId}` }
          >
          <img
            alt={ artistfind.artistName }
            src={ artistfind.artworkUrl100 }
          />

            <p>
              { artistfind.collectionName }
            </p>
          </Link>

        </div>
      ))
    );

    const result = (
      <div>
        <p className='resume'>
          Resultado de álbuns de:
          {` ${find}`}
        </p>
        <div id="renderAllAbuns">
          { filterArtist }
        </div>
      </div>
    );

    return (
      <div id="search">
        <Header />
        <div id="results">
          <label htmlFor="search">
            <input
              className="search"
              type="text"
              id='inputArtist'
              placeholder="Banda ou artista"
              onChange={ this.validadeButton }
              value={ nameFind }
            />
          </label>
          <button
            type="submit"
            disabled={ offButton }
            onClick={ this.searchButton }
          >
            Pesquisar
          </button>
        </div>
        <div className="content">
          {
            waitAPI === 'true' && <Load />
          }
          {
            (waitAPI === 'ok' && artist.length > 0) && result
          }
          {
            (waitAPI === 'ok' && artist.length === 0)
            && <p className='resume'> Nenhum álbum foi encontrado </p>
          }
        </div>
      </div>
    );
  }
}

export default Search;
