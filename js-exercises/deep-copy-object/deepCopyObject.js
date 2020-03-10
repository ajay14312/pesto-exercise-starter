const deepCopyObject = objToCopy => {
  return JSON.parse(JSON.stringify(objToCopy));
};

export { deepCopyObject };
