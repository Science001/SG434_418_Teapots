import React from 'react';

import MainContainer from './routes/MainContainer'
import Snacky from './sharedComponents/Snacky'
import './App.css';

function App() {
  return (
    <div className="App">
      <MainContainer />
      <Snacky />
    </div>
  );
}

export default App;
