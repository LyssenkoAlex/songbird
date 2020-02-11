import React from 'react';
import Game from './birds/Game';
import BirdCategories from './birds/BirdCategories';
import SecretBird from './birds/SecretBird';
import GameOver from './birds/GameOver';
import './style/app_style.scss';


function App() {
  return (
    <React.Fragment>
      <BirdCategories />
      <SecretBird />
      <Game />
      <GameOver />
    </React.Fragment>
  );
}

export default App;
