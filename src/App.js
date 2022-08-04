import React, {useState} from 'react';
import General from "./components/General.js";
import Education from "./components/Education.js";
import Experience from './components/Experience.js';
import uniqid from 'uniqid';
import './styles/App.css' ;
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const [educationIds, setEducationIds] = useState([]);
  const [experienceIds, setExperienceIds] = useState([]);

  const handleAddSection = (type) => {
    if(type === 'educationIds') {
      setEducationIds((prevInfo) => [...prevInfo, uniqid()]);
    } else {
      setExperienceIds((prevInfo) => [...prevInfo, uniqid()]);
    }
  };

  const handleDelete = (type, id) => {
    if (type === 'educationIds') {
      setEducationIds((prevInfo) => {
        return prevInfo.filter((key) => key !== id);
      });
    } else {
      setExperienceIds((prevInfo) => {
        return prevInfo.filter((key) => key !== id);
      })
    }
  };

  const renderEdComponents = () => {
    return educationIds.map((id) => (<Education key={id} id={id} handleDelete={handleDelete} />));
  };
  
  const renderExComponents = () => {
    return experienceIds.map((id) => <Experience key={id} id={id} handleDelete={handleDelete} />);
  };
  
  return (
    <div>
      <header>
        <h1>CV Application 2.0</h1>
      </header>
      <main>
        <h3>General Information</h3>
        <General />
        <h3>Education</h3>
        {renderEdComponents()}
        <button onClick={()=>handleAddSection('educationIds')}>Add Education</button>
        <h3>Experience</h3>
        {renderExComponents()}
        <button onClick={()=>handleAddSection('experienceIds')}>Add Experience</button>
      </main>
      <footer>
        <a href="https://github.com/jcrisostomo1" rel="noreferrer" target="_blank"><i className="fa fa-github fa-lg"></i></a>
        <p>Made by: jcrisostomo1</p>
      </footer>
    </div>
  );
};

export default App;
