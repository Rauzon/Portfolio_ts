import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Main} from './components/main/Main';
import {SkillsBlockContainer} from './components/skillsBlock/SkillsBlockContainer';
import {ProjectsContainer} from './components/projects/ProjectsContainer';
import {RemoteJobBlock} from "./components/remoteJobBlock/RemoteJobBlock";
import {Contacts} from './components/contacts/Contacts';
import {Footer} from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SkillsBlockContainer />
      <ProjectsContainer />
      <RemoteJobBlock />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
