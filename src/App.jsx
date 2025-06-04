import './App.css';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { Router } from './Router.jsx';
import NotFoundPage from './pages/404Page.jsx';
import SearchPage from './pages/searchPage.jsx';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/millos', component: () => <h1>Millonarios FC</h1> },
  { path: '/search/:query', component: SearchPage },
];

function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={NotFoundPage} />
    </main>
  );
}

export default App;
