import React from 'react'
import ChatEvent from './ChatEvent';
import {findNameById} from './participantDummy';
import './ChatLog.css'

const ChatLog = (props) => {


return (
<div className="chat-box">
  {props.chatEvents.map(event => (
        <ChatEvent 
          key={event.participantId}
          name={findNameById(event.participantId)}
          type={event.type}
          message={event.message}
          time={event.time}
          timestamp={event.timestamp}
  />))}
</div>
);
}

export default ChatLog