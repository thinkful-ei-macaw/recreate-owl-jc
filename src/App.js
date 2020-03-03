import React from 'react';
import './App.css';
import ParticipantList from './ParticipantList';
import participants from './participantDummy';
import Stage from './Stage';

function App() {
  return (
    <div className="App">
      <ParticipantList participants={participants}/>
      <Stage participants={participants}/>
    </div>
  );
}

export default App;