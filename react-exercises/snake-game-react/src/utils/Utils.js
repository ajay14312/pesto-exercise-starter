function setFoodPosition() {
  let min = 1;
  let max = 98;
  let XCoordinate = (Math.floor((Math.random() * max + min) / 2) * 2);
  let YCoordinate = (Math.floor((Math.random() * max + min) / 2) * 2);

  return [XCoordinate, YCoordinate];
}

export default setFoodPosition;