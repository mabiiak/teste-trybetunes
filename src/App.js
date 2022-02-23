import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Load from './pages/Load';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/album/:id" component={ Album } />
            <Route exact path="/favorites" component={ Favorites } />
            <Route exact path="/trybetunes" component={ Login } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/load" component={ Load } />
            <Route exact path="/search" component={ Search } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/**
  ----------------------------------------------------
  Refencias:

  Page Not Found -> https://medium.com/@benkissi/how-to-create-a-not-found-page-in-react-95381566271d

  ----------------------------------------------------
  Agradecimentos:

  Priscila que me ajudou no requisito 2

*/
