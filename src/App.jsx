import { lazy, Suspense } from 'react';

const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const SearchPage = lazy(() => import('./pages/searchPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/404Page.jsx'));

import './App.css';
import { Router } from './Router.jsx';
import { Route } from './Route.jsx';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/millos', component: () => <h1>Millonarios FC</h1> },
  { path: '/search/:query', component: SearchPage },
];

function App() {
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router routes={routes} defaultComponent={NotFoundPage}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/search/:query" Component={SearchPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
