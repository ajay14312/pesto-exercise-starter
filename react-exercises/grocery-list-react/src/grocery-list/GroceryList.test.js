import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroceryList from './GroceryList';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

Enzyme.configure({ adapter: new Adapter() });

describe('Grocery List testing', () => {
  const groceryList = render(<GroceryList />);
  const groceryName = groceryList.getByTestId('grocery-name');
  const addGroceryBtn = groceryList.getByTestId('add-grocery-btn');
  test('should set grocery value', () => {
    fireEvent.change(groceryName, { target: { value: 'sugar' } });
    expect(groceryName.value).toBe('sugar');
  })
  test('should be able to click add grocery btn', () => {
    const gList = Enzyme.mount(<GroceryList />);
    fireEvent.change(groceryName, { target: { value: 'sugar' } });
    userEvent.click(addGroceryBtn);
    gList.instance().addNewGrocery();
    console.log(gList.state('list'));
    expect(gList.state('list').length).toBe(1);
  })
})