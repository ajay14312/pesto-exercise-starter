const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  return bankBalances.filter(element => parseFloat(element.amount) > 100000);
}

function datasetWithRoundedDollar() {
  const newDataSet = [];
  bankBalances.forEach((element) => {
    const { state, amount } = element;
    const rounded = Math.round(element.amount);
    newDataSet.push({ state, amount, rounded });
  });
  return newDataSet;
}

function sumOfBankBalances() {
  const sumOfBalances = bankBalances.reduce((accumulator, currentValue) => {
    return accumulator + parseFloat(currentValue.amount);
  }, 0);
  return Math.round(sumOfBalances * 100) / 100;
}

function sumOfInterests() {
  console.log(
    bankBalances.reduce((accumulator, currentValue) => {
      if (["WI", "IL", "GA", "WY", "OH", "DE"].includes(currentValue.state)) {
        let parseTheFloatAmount = parseFloat(currentValue.amount);
        return accumulator + 0.189 * Math.round(parseTheFloatAmount);
      }
      return accumulator;
    }, 0)
  );
}

function higherStateSums() {
  const statesObject = {};
  let aggregateSum = 0;
  bankBalances.forEach(element => {
    const { state, amount } = element;
    statesObject[state]? (statesObject[state] += parseFloat(amount)) : (statesObject[state] = parseFloat(amount));
  });
  for (let key in statesObject) {
    if (parseFloat(statesObject[key]) > 1000000)
      aggregateSum += parseFloat(statesObject[key]);
  }

  return aggregateSum;
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
