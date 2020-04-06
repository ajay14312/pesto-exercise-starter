import React, { useState, useEffect } from 'react';
import Snake from './snake/Snake';
import Food from './food/Food';
import { KeyCodes } from './app_conts';
import setFoodPosition from './utils/Utils';

function App() {
  const [food, setFood] = useState({ food: { apple: setFoodPosition(), bomb: setFoodPosition() } });
  const [isBombAte, setIsBombAte] = useState(false);
  const [direction, setDirection] = useState('RIGHT');
  const [snakeData, setSnakeData] = useState({
    snakeDots: [[50, 50], [52, 50], [54, 50]]
  })
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);
  let [snakeSpeed, setSnakeSpeed] = useState(200);
  let [isSnakeNearFood, setIsSnakeNearFood] = useState(false);

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
        setDirection('RIGHT');
      }
    } else if (event === KeyCodes.LEFT) {
      if (head[1] !== dots[dots.length - 2][1]) {
        setDirection('LEFT');
      }
    } else if (event === KeyCodes.DOWN) {
      if (head[0] !== dots[dots.length - 2][0]) {
        setDirection('DOWN');
      }
    } else if (event === KeyCodes.UP) {
      if (head[0] !== dots[dots.length - 2][0]) {
        setDirection('UP');
      }
    } else if (event === KeyCodes.ENTER) {
      reset();
    }
  }

  function gameOver() {
    let head = snakeData.snakeDots[snakeData.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      setIsBombAte(true);
      //reset();
    }
  }

  function reset() {
    setDirection('RIGHT');
    setSnakeSpeed(200)
    setScore(0);
    setSnakeData({
      snakeDots: [[50, 50], [52, 50], [54, 50]]
    })
    setIsBombAte(false);
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
    let head = dots[dots.length - 1];
    if (head[0] === food.food.apple[0] && head[1] === food.food.apple[1]) {
      setScore(score + 1);
      dots.unshift([]);
      setFood({ food: { apple: setFoodPosition(), bomb: setFoodPosition() } });
      setSnakeData({ snakeDots: dots });
      if (snakeSpeed > 20) {
        setSnakeSpeed(snakeSpeed - 10);
      }
    } else if (head[0] === food.food.bomb[0] && head[1] === food.food.bomb[1]) {
      setIsBombAte(true);
      //reset();
    }
  }

  function checkSnakeNearFood() {
    let dots = snakeData.snakeDots;
    let head = dots[dots.length - 1];
    if (direction === 'RIGHT' || direction === 'LEFT') {
      if (food.food.apple[1] === head[1]) {
        setIsSnakeNearFood(true);
      } else {
        setIsSnakeNearFood(false);
      }
    } else {
      if (food.food.apple[0] === head[0]) {
        setIsSnakeNearFood(true);
      } else {
        setIsSnakeNearFood(false);
      }
    }
  }

  function setBomb() {
    if (score > 0 && score % 5 === 0) {
      return <Food foodData={food.food.bomb} isSnakeNearFood={isSnakeNearFood} bomb={true}></Food>
    } else {
      return '';
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
        {!isBombAte ? <div>
          <Snake snakeData={snakeData.snakeDots}></Snake>
          <Food foodData={food.food.apple} isSnakeNearFood={isSnakeNearFood}></Food>
          {setBomb()}
        </div> : <div className="bombText">
            <p>Ohh Noo!! You Died. Press enter to restart the game</p>
          </div>}
      </div>
    </div>
  )
}

export default App;
