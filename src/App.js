import React from 'react';
import Game from './birds/Game';
import BirdCategories from './birds/BirdCategories';
import SecretBird from './birds/SecretBird';
import ScoreBoard from './birds/ScoreBoard';
import BirdInfo from './birds/BirdInfo';
import NextLevel from './birds/NextLevel';

function App() {
  return (
    <React.Fragment>
      <ScoreBoard />
      <BirdCategories />
      <SecretBird />
      <Game />
      <NextLevel />
      <BirdInfo />
    </React.Fragment>
  );
}

export default App;
