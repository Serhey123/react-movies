import { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';

import { Oval } from 'react-loader-spinner';

const HomePage = lazy(() => import('./components/HomePage/HomePage.js'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage.js'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage.js'),
);

class App extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <main className="main">
          <Suspense
            fallback={
              <Oval
              height={50}
              width={50}
              color="#000"
              wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
              secondaryColor="#f0"
              strokeWidth={4}
              strokeWidthSecondary={4}
            />
            }
          >
            <Switch>
              <Route path="/movies/:movieId">
                <MovieDetailsPage />
              </Route>

              <Route path="/movies">
                <MoviesPage />
              </Route>

              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Suspense>
        </main>
      </Container>
    );
  }
}

export default App;
