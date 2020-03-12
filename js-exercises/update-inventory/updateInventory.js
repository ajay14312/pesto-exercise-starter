function updateInventory(...args) {
  const currentInventoryArray = args[0];
  const freshDeliveryArray = args[1];
  const totalInventoryObject = {};
  const updatedInventoryArray = [];
  for (let key of currentInventoryArray) {
    const [value, item] = key;
    totalInventoryObject[item]
      ? (totalInventoryObject[item] += value)
      : (totalInventoryObject[item] = value);
  }
  for (let key of freshDeliveryArray) {
    const [value, item] = key;
    totalInventoryObject[item]
      ? (totalInventoryObject[item] += value)
      : (totalInventoryObject[item] = value);
  }
  for (let key in totalInventoryObject) {
    updatedInventoryArray.push([totalInventoryObject[key], key]);
  }
  return updatedInventoryArray.sort((currentArray, nextArray) =>
    currentArray[1] > nextArray[1] ? 1 : -1
  );
}

export { updateInventory };
