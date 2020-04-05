import React from 'react';
import './Food.css'

const Food = (props) => {
  const animateFood = props.isSnakeNearFood ? 'food' : 'food animate-food';
  return (
    <div>
      {
        props.foodData.map((foodCoordinates, i) => {
          const foodPosition = {
            left: `${foodCoordinates[0]}%`,
            top: `${foodCoordinates[1]}%`
          }
          return (
            <div className={animateFood} key={i} style={foodPosition}></div>
          )
        })
      }
    </div>
  )
}

export default Food;