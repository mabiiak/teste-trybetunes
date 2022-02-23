import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../services/components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Load from './Load';
import '../css/profile-edit.css';

class ProfileEdit extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      loadName: false,
      mail: '',
      img: '',
      description: '',
      buttonDisable: true,
      redirect: false,
    };

    this.user = this.user.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.upUser = this.upUser.bind(this);
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    this.user();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => { this.validateButton(); });
    this.validateButton();
  }

  validateButton() {
    const { user, mail, img, description } = this.state;

    if (user.length > 0
    && mail.includes('@')
    && img.length > 0
    && description.length > 0) {
      this.setState({ buttonDisable: false });
    } else {
      this.setState({ buttonDisable: true });
    }
  }

  async user() {
    this.setState({ loadName: true });

    const nameUser = await getUser()
      .then((data) => (this.setState({
        user: data.name,
        mail: data.email,
        description: data.description,
        img: data.image,
      })));

    this.setState({ loadName: false });
    this.validateButton();
    return nameUser;
  }

  async upUser() {
    const { user, mail, description, img } = this.state;
    await updateUser(
      {
        name: user,
        email: mail,
        image: img,
        description,
      },
    );
  }

  click() {
    this.upUser();
    this.setState({ redirect: true });
  }

  render() {
    const {
      user, mail, description, img, loadName, buttonDisable, redirect } = this.state;
    const form = (
      <form className="form-edit">
        <label htmlFor="name">
          <input
            id="name"
            data-testid="edit-input-name"
            name="user"
            type="text"
            value={ user }
            placeholder="Nome"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="mail">
          <input
            id="mail"
            name="mail"
            type="text"
            data-testid="edit-input-email"
            value={ mail }
            onChange={ this.handleChange }
            placeholder="Email"
          />
        </label>
        <p>Sobre mim </p>
        <textarea
          id="desc"
          name="description"
          data-testid="edit-input-description"
          value={ description }
          onChange={ this.handleChange }
        />
        <label htmlFor="img">
          <input
            id="img"
            name="img"
            type="text"
            value={ img }
            placeholder="Adicione uma foto
            "
            data-testid="edit-input-image"
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="edit-button-save"
          type="button"
          disabled={ buttonDisable }
          onClick={ this.click }
        >
          Salvar
        </button>
      </form>
    );

    return (
      <div data-testid="page-profile-edit">
        <Header />
        {
          loadName ? <Load /> : form
        }
        {
          redirect && <Redirect to="/profile" />
        }
      </div>
    );
  }
}

// Feito com a ajuda do Emerson Moreira e Rafael Santos

export default ProfileEdit;
