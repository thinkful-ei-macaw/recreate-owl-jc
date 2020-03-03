import React from 'react'

const Tile = (props) => {

  return (
  <div>
    <img className="tile-image" alt="Avatar" src={props.avatar}/>
    <p>{props.name}</p>
  </div>
  );
  }
  
  export default Tile;