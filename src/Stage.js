import React from 'react'
import Tile from './Tile';

const Stage = ({participants}) => {
  return (
    <div>
    {
      participants.map(participant => participant.onStage ? 
        <Tile  
        key={participant.id}
        avatar={participant.avatar}
        name={participant.name}
        />:null)
    }
    </div>
  )
}

export default Stage;