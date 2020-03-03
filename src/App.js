import React from 'react';
import './App.css';
import ParticipantList from './ParticipantList';
import participants from './participantDummy';
function App() {
  return (
    <div className="App">
      <ParticipantList participants={participants}/>
    </div>
  );
}

export default App;