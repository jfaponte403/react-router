import './App.css';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { Router } from './Router.jsx';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/millos', component: () => <h1>Millonarios FC</h1> },
];

function App() {
  return (
    <main>
      <Router routes={routes} />
    </main>
  );
}

export default App;
