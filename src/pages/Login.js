import React from 'react';
import { Redirect } from 'react-router-dom';

import Load from './Load';
import { createUser } from '../services/userAPI';

import '../css/login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.disableButton = this.disableButton.bind(this);
    this.clickButton = this.clickButton.bind(this);

    this.state = {
      nameUser: '',
      offButton: true,
      start: false,
      loader: false,
    };
  }

  disableButton(event) {
    const { nameUser } = this.state;

    this.setState({ nameUser: event.target.value });

    if (nameUser.length >= 2) {
      this.setState({ offButton: false });
    } else {
      this.setState({ offButton: true });
    }
  }

  async clickButton() {
    const { nameUser } = this.state;
    this.setState({ loader: true });

    const requestCreateUser = await createUser({ name: nameUser });
    this.setState({ loader: false });
    this.setState({ start: true });

    return requestCreateUser;
  }

  render() {
    const {
      loader, start, offButton,
    } = this.state;

    return (
      loader ? (<Load />) : (
        <div data-testid="page-login" className="login">
          <h2>TrybeTunnes</h2>
          <label htmlFor="name">
            <input
              id="name"
              type="text"
              onChange={ this.disableButton }
              placeholder="                   Nome"
              data-testid="login-name-input"
            />
          </label>
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ offButton }
            onClick={ this.clickButton }
          >
            Entrar
          </button>

          {
            start === true && <Redirect to="/search" />
          }
        </div>
      ));
  }
}

export default Login;
