import React from 'react';
import './App.css';
import General from './components/General/General';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import SavePageBtn from './components/Buttons/SavePageBtn';

function App() {
  return (
    <div className="app">
      <div className="save-cv-container">
        <SavePageBtn />
      </div>
      <div className="gen-info-section">
        <General />
      </div>
      <div className="work-section">
        <Work />
      </div>
      <div className="education-section">
        <Education />
      </div>
    </div>
  );
}

export default App;
