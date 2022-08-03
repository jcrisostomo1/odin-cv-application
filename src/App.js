import React, {useState} from 'react';
import General from "./components/General.js";
import Education from "./components/Education.js";
import uniqid from 'uniqid';
import './styles/App.css' ;
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const [educationIds, setEducationIds] = useState([]);

  const addComponent = () => {
    setEducationIds((prevInfo) => {
      return [...prevInfo, uniqid()]
    });
  };

  const renderSectionComponent = () => {
    return educationIds.map((id) => (<Education key={id} id={id}/>))
  }
  

  return (
    <div>
      <header>
        <h1>CV Application 2.0</h1>
      </header>
      <main>
        <General title="General Information" />
        <h3>Education</h3>
        {renderSectionComponent()}
        <button onClick={addComponent}>Add Education</button>
      </main>
      <footer>
        <a href="https://github.com/jcrisostomo1" rel="noreferrer" target="_blank"><i className="fa fa-github fa-lg"></i></a>
        <p>Made by: jcrisostomo1</p>
      </footer>
    </div>
  );
}

export default App;
