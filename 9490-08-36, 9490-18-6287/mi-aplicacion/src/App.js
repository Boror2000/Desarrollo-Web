import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import CatAPI from './CatAPI';
import AnimeVideo from './AnimeVideo';
import BibliaPage from './BibliaPage';
import DogImagePage from './DogImagePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Página Principal</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/cat-api">Cat API</Link>
              </li>
              <li>
                <Link to="/anime-video">Anime Video</Link>
              </li>
              <li>
                <Link to="/biblia-page">Biblia Page</Link>
              </li>
              <li>
                <Link to="/dog-image">Dog Image</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/cat-api" component={CatAPI} />
            <Route path="/anime-video" component={AnimeVideo} />
            <Route path="/biblia-page" component={BibliaPage} />
            <Route path="/dog-image" component={DogImagePage} />
            <Route path="/" exact>
              <p>Bienvenido a la página principal.</p>
            </Route>
          </Switch>
          <button onClick={() => window.location.href = '/cat-api'}>Ir a Cat API</button>
          <button onClick={() => window.location.href = '/anime-video'}>Ir a Anime Video</button>
          <button onClick={() => window.location.href = '/biblia-page'}>Ir a Biblia Page</button>
          <button onClick={() => window.location.href = '/dog-image'}>Ir a Dog Image</button>
        </main>
        <footer>
        <p>Nombre del estudiante: Asbel Sosa, Brandon Boror</p>
        <p>Carnet: 9490-08-36, 9490-18-6287</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;