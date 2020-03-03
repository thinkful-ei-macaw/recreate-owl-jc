import React from 'react'
import Participant from './Participant';

const ParticipantList = (props) => {

return (
  <div>
    {props.participants.map(participant => (participant.inSession
    ? <Participant 
    key={participant.id}
    avatar={participant.avatar}
    name={participant.name}
    onStage={participant.onStage}/>
    : null))}
  </div>
);
}

export default ParticipantList