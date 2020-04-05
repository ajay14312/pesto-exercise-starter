import React, { useState, useEffect } from 'react';
import Snake from './snake/Snake';
import Food from './food/Food';
import { KeyCodes } from './app_conts'

function App() {
  const [food, setFood] = useState({ food: [setFoodPosition()] });
  const [direction, seDirection] = useState('RIGHT');
  const [snakeData, setSnakeData] = useState({
    snakeDots: [[50, 50], [52, 50], [54, 50]]
  })
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);
  let [snakeSpeed, setSnakeSpeed] = useState(200);
  let [isSnakeNearFood, setIsSnakeNearFood] = useState(false);

  function setFoodPosition() {
    let min = 1;
    let max = 98;
    let x = (Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2);
    let y = (Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2);

    return [x, y];
  }

  useEffect(() => {
    gameOver();
    eatFood();
    checkSnakeNearFood();
    const int = setInterval(moveSnake, snakeSpeed);
    if (score > highScore) {
      setHighScore(score);
    }
    window.onkeydown = checkKeyDown;
    return () => clearInterval(int);
  }, [direction, moveSnake, snakeData.snakeDots]);


  function checkKeyDown(e) {

    let dots = snakeData.snakeDots;
    let head = dots[dots.length - 1];
    const event = e.keyCode;

    if (event === KeyCodes.RIGHT) {
      if (head[1] !== dots[dots.length - 2][1]) {
        seDirection('RIGHT');
      }
    } else if (event === KeyCodes.LEFT) {
      if (head[1] !== dots[dots.length - 2][1]) {
        seDirection('LEFT');
      }
    } else if (event === KeyCodes.DOWN) {
      if (head[0] !== dots[dots.length - 2][0]) {
        seDirection('DOWN');
      }
    } else if (event === KeyCodes.UP) {
      if (head[0] !== dots[dots.length - 2][0]) {
        seDirection('UP');
      }
    }
  }

  function gameOver() {
    let head = snakeData.snakeDots[snakeData.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      reset();
    }
  }

  function reset() {
    setScore(0);
    setSnakeData({
      snakeDots: [
        [0, 0],
        [2, 0]
      ]
    })
  }

  function moveSnake() {
    let dots = snakeData.snakeDots;
    let head = dots[dots.length - 1];
    switch (direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    setSnakeData({ snakeDots: dots });
  }

  function eatFood() {
    let dots = snakeData.snakeDots;
    let head = dots[0];
    if (head[0] === food.food[0][0] && head[1] === food.food[0][1]) {
      setScore(score + 1);
      dots.unshift([]);
      setFood({ food: [setFoodPosition()] });
      setSnakeData({ snakeDots: dots });
      if (snakeSpeed > 20) {
        setSnakeSpeed(snakeSpeed - 10);
      }
    }
  }

  function checkSnakeNearFood() {
    let dots = snakeData.snakeDots;
    let head = dots[dots.length - 1];
    if (direction === 'RIGHT' || direction === 'LEFT') {
      if (food.food[0][1] === head[1]) {
        setIsSnakeNearFood(true);
      } else {
        setIsSnakeNearFood(false);
      }
    } else {
      if (food.food[0][0] === head[0]) {
        setIsSnakeNearFood(true);
      } else {
        setIsSnakeNearFood(false);
      }
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          Score: {score}
        </div>
        <div>
          High Score: {highScore}
        </div>
      </div>
      <div className="game">
        <Snake snakeData={snakeData.snakeDots}></Snake>
        <Food foodData={food.food} isSnakeNearFood={isSnakeNearFood}></Food>
      </div>
    </div>
  );
}

export default App;
