import React, { useState} from 'react';
import './App.css';

import AppRouter from './routes';

function App() {

  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
