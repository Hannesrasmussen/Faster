import React from 'react';
import './App.css';

// Components
import { ContextProvider } from './context/Context';
import Main from './components/main/Main';

function App() {

  return (
    <ContextProvider>
      <Main/>
    </ContextProvider>
  );
}

export default App;
