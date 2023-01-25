import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage'

class App extends Component {
  render() {
    return (
        <Container>
          <Navigation/>
          <Switch>

          <Route path='/movies/:movieId'>
            <MovieDetailsPage/>
          </Route>

          <Route path='/movies'>
            <MoviesPage/>
          </Route>

          <Route path='/' >
            <HomePage/>
          </Route>

          </Switch>
        </Container>
    );
  }
}

export default App;
