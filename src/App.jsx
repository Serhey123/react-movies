import { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import ContainerWrapper from './components/ContainerWrapper/ContainerWrapper';
import NavigationHeader from './components/NavigationHeader/NavigationHeader';

import { Oval } from 'react-loader-spinner';

const HomePage = lazy(() => import('./components/HomePage/HomePage.js'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage.js'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage.js'),
);

class App extends Component {
  render() {
    return (
      <ContainerWrapper>
        <NavigationHeader />
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
      </ContainerWrapper>
    );
  }
}

export default App;
