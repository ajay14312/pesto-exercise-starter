const animalSort = animals => {
  return animals.sort((currentObject, nextObject) => {
    if (currentObject.numberOfLegs - nextObject.numberOfLegs === 0) {
      const currentName = currentObject.name.toLowerCase();
      const nextName = nextObject.name.toLowerCase();
      return currentName > nextName ? 1 : -1;
    }
    return currentObject.numberOfLegs - nextObject.numberOfLegs;
  });
};

export { animalSort };
