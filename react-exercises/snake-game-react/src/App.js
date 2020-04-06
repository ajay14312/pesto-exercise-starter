import React, { useState, useEffect } from 'react';
import Snake from './snake/Snake';
import Food from './food/Food';
import { KeyCodes } from './app_conts';
import setFoodPosition from './utils/Utils';

const App = () => {
  const [food, setFood] = useState({ food: { apple: setFoodPosition(), bomb: setFoodPosition() } });
  const [isBombAte, setIsBombAte] = useState(false);
  const [direction, setDirection] = useState('RIGHT');
  const [snakeData, setSnakeData] = useState({
    snakePositions: [[50, 50], [52, 50], [54, 50]]
  })
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);
  let [snakeSpeed, setSnakeSpeed] = useState(200);
  let [isSnakeNearFood, setIsSnakeNearFood] = useState(false);

  useEffect(() => {
    gameOver();
    eatFood();
    checkSnakecollapse();
    checkSnakeNearFood();
    const snakeMoveinterval = setInterval(moveSnake, snakeSpeed);
    if (score > highScore) {
      setHighScore(score);
    }
    window.onkeydown = checkKeyDown;
    return () => clearInterval(snakeMoveinterval);
  }, [direction, moveSnake, snakeData.snakePositions]);


  function checkKeyDown(event) {

    let snakePositions = snakeData.snakePositions;
    let head = snakePositions[snakePositions.length - 1];
    const keyCode = event.keyCode;

    if (keyCode === KeyCodes.RIGHT) {
      event.preventDefault();
      if (head[1] !== snakePositions[snakePositions.length - 2][1]) {
        setDirection('RIGHT');
      }
    } else if (keyCode === KeyCodes.LEFT) {
      event.preventDefault();
      if (head[1] !== snakePositions[snakePositions.length - 2][1]) {
        setDirection('LEFT');
      }
    } else if (keyCode === KeyCodes.DOWN) {
      event.preventDefault();
      if (head[0] !== snakePositions[snakePositions.length - 2][0]) {
        setDirection('DOWN');
      }
    } else if (keyCode === KeyCodes.UP) {
      event.preventDefault();
      if (head[0] !== snakePositions[snakePositions.length - 2][0]) {
        setDirection('UP');
      }
    } else if (keyCode === KeyCodes.ENTER) {
      reset();
    }
  }

  function gameOver() {
    let head = snakeData.snakePositions[snakeData.snakePositions.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      setIsBombAte(true);
    }
  }

  function reset() {
    setDirection('RIGHT');
    setSnakeSpeed(200)
    setScore(0);
    setSnakeData({
      snakePositions: [[50, 50], [52, 50], [54, 50]]
    })
    setIsBombAte(false);
  }

  function moveSnake() {
    let snakePositions = snakeData.snakePositions;
    let head = snakePositions[snakePositions.length - 1];
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
    snakePositions.push(head);
    snakePositions.shift();
    setSnakeData({ snakePositions: snakePositions });
  }

  function checkSnakecollapse() {
    const snake = [...snakeData.snakePositions]
    let head = snake[snake.length - 1];
    snake.pop();
    for (let snakeCoordinates of snake) {
      if (head[0] === snakeCoordinates[0] && head[1] === snakeCoordinates[1]) {
        setIsBombAte(true);
      }
    }
  }

  function eatFood() {
    let snakePositions = snakeData.snakePositions;
    let head = snakePositions[snakePositions.length - 1];
    if (head[0] === food.food.apple[0] && head[1] === food.food.apple[1]) {
      setScore(score + 1);
      snakePositions.unshift([]);
      setFood({ food: { apple: setFoodPosition(), bomb: setFoodPosition() } });
      setSnakeData({ snakePositions: snakePositions });
      if (snakeSpeed > 20) {
        setSnakeSpeed(snakeSpeed - 10);
      }
    } else if (head[0] === food.food.bomb[0] && head[1] === food.food.bomb[1]) {
      setIsBombAte(true);
    }
  }

  function checkSnakeNearFood() {
    let snakePositions = snakeData.snakePositions;
    let head = snakePositions[snakePositions.length - 1];
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
    <div data-testid="container">
      <div style={{ textAlign: 'center' }}>
        <h3>Snake Game</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          Score: {score}
        </div>
        <div >
          High Score: <span data-testid="highScore">{highScore}</span>
        </div>
      </div>
      <div>
        <ul style={{ listStyle: 'none' }}>
          <li>Use <b>Left, Right, Top and Down</b> arrows to play with the snake</li>
        </ul>
      </div>
      <div className="game">
        {!isBombAte ? (<div>
          <Snake snakeData={snakeData.snakePositions}></Snake>
          <Food foodData={food.food.apple} isSnakeNearFood={isSnakeNearFood}></Food>
          {setBomb()}
        </div>) :
          (<div className="endGame">
            <div className="bombText">Ohh Noo!! You Died. Press enter to restart the game</div>
            {highScore > 0 ?
              <div className="highScoreText">High Score : {highScore}</div> : ''}
          </div>)}
      </div>
    </div>
  )
}

export default App;
