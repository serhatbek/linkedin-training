import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './assets/css/main.css';
// import Header from './components/Organisms/Header/Header';
import Layout from './components/Layout/Layout';

import UsersPage from './components/pages/UsersPage';
import UserPage from './components/pages/UserPage';
import Posts from './components/pages/Posts';
import Todos from './components/pages/Todos';
import NotFoundPage from './components/pages/NotFoundPage';
import Footer from './components/Organisms/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/404" component={NotFoundPage} />
            <Route exact path="/user/:id" component={UserPage} />
            <Route exact path="/todos" component={Todos} />
            <Route exact path="/posts" component={Posts} />
            <Redirect to="/404" />
          </Switch>
        </Layout>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
