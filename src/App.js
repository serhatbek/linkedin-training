import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/css/main.css';
import Header from './components/Organisms/Header/Header';

import SelectedUserProfile from './components/pages/SelectedUserProfile';
import ListUsers from './components/pages/ListUsers';
import Posts from './components/pages/Posts';
import Todos from './components/pages/Todos';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Switch>
          <Route exact path="/" component={SelectedUserProfile} />
          <Route exact path="/listUsers" component={ListUsers} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/todos" component={Todos} />
        </Switch>
      </Header>
    </BrowserRouter>
  );
}

export default App;
