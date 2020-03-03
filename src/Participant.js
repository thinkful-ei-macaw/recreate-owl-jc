import React from 'react'
import './Participant.css'

const Participant = (props) => {

return (
<div className="participant-card">
  <img className="participant participant-img" alt="Avatar" src={props.avatar}/>
  <p className="name-paragraph">{props.name}</p>
  {props.onStage ? <p className="stage-status">on stage</p> : null}
</div>
);
}

export default Participant;