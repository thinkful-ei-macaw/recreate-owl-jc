import React from 'react'

const Participant = (props) => {

return (
<div>
  <img className="participant participant-img" alt="Avatar" src={props.avatar}/>
  <p>{props.name}</p>
  {props.onStage ? <p>on stage</p> : null}
</div>
);
}

export default Participant;