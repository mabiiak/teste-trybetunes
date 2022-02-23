import React from 'react';
import { Link } from 'react-router-dom';

import { getUser } from '../userAPI';
import Load from '../../pages/Load';

import './header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
    };

    this.readerPromise = this.readerPromise.bind(this);
  }

  componentDidMount() {
    this.readerPromise();
  }

  async readerPromise() {
    const getuser = await getUser()
      .then((data) => (this.setState({
        user: data.name,
      })));

    return getuser;
  }

  render() {
    const { user } = this.state;

    return (
      <header data-testid="header-component" className="header">
        <div className="first-line">
          <h2> TrybeTunnes </h2>
          <div className="user">
            { user ? <span> </span> : <Load /> }

            <strong>
              <p data-testid="header-user-name" className="name">
                { user }
              </p>
            </strong>

          </div>
        </div>
        <div className="links">
          <Link data-testid="link-to-favorites" to="/favorites"> Favoritos </Link>
          <Link to="/profile" data-testid="link-to-profile"> Perfil </Link>
          <Link to="/search" data-testid="link-to-search"> Pesquisar </Link>
        </div>
      </header>
    );
  }
}

export default Header;
