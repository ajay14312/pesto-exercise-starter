import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import App from './App';

describe('App', () => {
  it('should render zero state', () => {
    const app = render(<App />);
    const highScore = app.getByTestId('highScore');
    expect(Number(highScore.textContent)).toBe(0);
  })
  it('should fire key down event', () => {
    const app = render(<App />);
    const mainContainer = app.getByTestId('container');
    const snake = app.getByTestId('snake-2');
    fireEvent.keyDown(mainContainer, { key: 'RIGHT', code: 39 });
    expect(snake.style.top).toBe('50%');
  })
})
