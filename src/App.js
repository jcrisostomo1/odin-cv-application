import React from 'react';
import General from "./components/General.js"
import './styles/App.css' 
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>CV Application 2.0</h1>
      </header>
      <main>
        <General title="General Information" />
      </main>
      <footer>
        <a href="https://github.com/jcrisostomo1" rel="noreferrer" target="_blank"><i className="fa fa-github fa-lg"></i></a>
        <p>Made by: jcrisostomo1</p>
      </footer>
    </div>
  );
}

export default App;
