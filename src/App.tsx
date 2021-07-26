import React from 'react';
import './App.css';
import { GlobalFooter } from './components/GlobalFooter';
import { GlobalHeader } from './components/GlobalHeader';

function App() {
  return (
    <div className="App">
      <GlobalHeader/>
      <GlobalFooter/>
    </div>
  );
}

export default App;
