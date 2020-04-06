import React from 'react';
import './Food.css'

const Food = (props) => {
  const animateFood = props.isSnakeNearFood ? 'food' : 'food animate-food';
  const bomb = props.isSnakeNearFood ? `bomb` : 'bomb animate-bomb';
  const foodPosition = {
    left: `${props.foodData[0]}%`,
    top: `${props.foodData[1]}%`
  }
  return (
    <div>
      <div className={props.bomb ? bomb : animateFood} style={foodPosition}></div>
    </div>
  )
}

export default Food;