import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Load from './Load';
import '../css/profile.css';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      loadName: false,
      mail: '',
      img: '',
      description: '',
    };

    this.user = this.user.bind(this);
  }

  componentDidMount() {
    this.user();
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

    return nameUser;
  }

  render() {
    const { user, loadName, mail, img, description } = this.state;
    const userInfos = (
      <div className="user-info">
        <img
          className="user-icon"
          data-testid="profile-image"
          alt={ user }
          src={ img }
        />

        <div className="informaçoes">
          <h3>Nome:</h3>
          <p>
            { user }
          </p>
          <h3>Email:</h3>
          <p>
            { mail }
          </p>
          <h3>Descrição:</h3>
          <p>
            { description }
          </p>
        </div>
        <Link className="link" to="/profile/edit"> Editar perfil </Link>
      </div>
    );

    return (
      <div className="profile" data-testid="page-profile">
        <Header />
        {
          loadName
            ? <Load /> : userInfos
        }
      </div>
    );
  }
}

export default Profile;
