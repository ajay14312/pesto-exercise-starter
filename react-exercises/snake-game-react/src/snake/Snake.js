import React from 'react';
import './Snake.css'

const Snake = (props) => {
  return (
    <div>
      {
        props.snakeData.map((snakeCoordinates, i) => {
          const snakePosition = {
            left: `${snakeCoordinates[0]}%`,
            top: `${snakeCoordinates[1]}%`
          }
          return (
            <div className="snake" key={i} style={snakePosition} data-testid={`snake-${i}`}></div>
          )
        })
      }
    </div>
  )
}

export default Snake;