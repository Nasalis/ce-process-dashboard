import React from 'react';
import './App.css';
import { GlobalFooter } from './components/GlobalFooter';
import { GlobalHeader } from './components/GlobalHeader';
import { TableArea } from './components/TableArea';

function App() {
  return (
    <div className="App">
      <GlobalHeader/>
      <TableArea/>
      <GlobalFooter/>
    </div>
  );
}

export default App;
