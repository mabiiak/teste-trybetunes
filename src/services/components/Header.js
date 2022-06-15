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
      <header id="header">
        <Link to="/search">
          <h2> TrybeTunnes </h2>
        </Link>
        { user ? <span></span> : <Load /> }
        <nav>
          <Link to="/profile">
            <h3> { user } </h3>
          </Link>
          <Link to="/favorites">
            <h3> Favoritos </h3>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
