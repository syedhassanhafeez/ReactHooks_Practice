//Hooks ko use krta waqt react ko import krna zaroori nhi hai wo react ki api ko samajh leta hai.

// import React from 'react';

import { useState } from 'react';
import HooksCount from './HooksCount';
import './App.css';

function App() {

  const [hooksCount, setHooksCount] = useState(true);

  return (
    <div className="App">
      {/* Unmount Hooks Count */}
      <button onClick={() => setHooksCount(false)}>Unmount Hooks Count</button>
      <br />

      {/* Toggle Hooks Count  means just like switch (On & off)*/}
      {/* <button onClick={() => setHooksCount(!hooksCount)}>Toggle Hooks Count</button> */}
      {
        hooksCount ? <HooksCount /> : 'Hook Count Unmounted'
      }
    </div>
  );
}

export default App;
