import React from 'react'

const ChatEvent = (props) => {

  function getMessage(props) {
    switch(props.type) {
      case 'thumbs-up': return `${props.name} gave a thumbs up 👍`;
      case 'thumbs-down': return `${props.name} gave a thumbs down 👎`;
      case 'raise-hand' : return `${props.name} raised their hand ✋`;
      case 'clap' : return `${props.name} clapped 👏`;
      case 'join' : return `${props.name} joined`;
      case 'leave' : return `${props.name} left`;
      case 'join-stage' : return `${props.name} joined the stage`;
      case 'leave-stage' : return `${props.name} left the stage`;
      default : return '';
    }
  }

return (
<div>
  {props.message
  ? <div>{props.name} -- {props.message} -- {new Date(props.time).toLocaleTimeString}</div>
  : getMessage(props)}
</div>
);
}

export default ChatEvent;