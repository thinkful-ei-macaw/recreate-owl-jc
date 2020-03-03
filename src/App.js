import React from 'react';
import './App.css';
import ParticipantList from './ParticipantList';
import participants from './participantDummy';
import chatEvents from './chatEventsDummy';
import Stage from './Stage';
import ChatLog from './ChatLog';

function App() {
  return (
    <div className="App">
      <ParticipantList participants={participants}/>
      <Stage participants={participants}/>
      <ChatLog chatEvents={chatEvents} />
    </div>
  );
}

export default App;