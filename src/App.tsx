import React from 'react';
import './App.css';
import { Application } from './components/application/application';
import { Skills } from './components/skills/skills';
import { SkillsProps } from './components/skills/skills.types';
import { Counter } from './components/counter/counter';

function App() {
  const skills = ["HTML", "CSS", "JavaScript"];
  return (
    <div className="App">
      {/* <Application/> */}
      {/* <Skills skills={skills}/> */}
      <Counter/>
    </div>
  );
}

export default App;
