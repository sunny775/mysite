import React from 'react';
import me from './images/me.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="logo" />
        <p>
          Nkwuda Sunday Cletus
        </p>
        <p>
          A web and mobile app developer
        </p>
        <a
          className="App-link"
          href="https://twitter.com/scletus40"
          target="_blank"
          rel="noopener noreferrer"
        >
        twitter
        </a>
      </header>
    </div>
  );
}

export default App;
