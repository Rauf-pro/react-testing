import React from "react";
import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";
import { Counter } from "./components/counter/counter";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProviders } from "./providers/app-providers";

function App() {
  const skills = ["HTML", "CSS", "JavaScript"];
  return (
    <>
      <div className="App">
        <AppProviders>
          <Application />
          <Skills skills={skills} />
          <Counter />

          <div className="mb-5"></div>
        </AppProviders>
      </div>
    </>
  );
}

export default App;
