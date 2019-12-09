const fs = require('fs');

//read in data
let massArr = fs.readFileSync('module-mass.txt', 'utf8')
    .split('\n')
    .filter(Boolean);


//map function converts array of data to integers
let massArrInts = massArr.map((mass) => parseInt(mass));


//reducer function caculcates the fuel needed for one module and adds to totalFuel accumulator
const calcModuleFuel = (totalFuel, currentModule) => {
    let fuel = parseInt(currentModule / 3) - 2;
    return totalFuel + fuel;
};

//reduce function iterates through array with reducer function, accumulating totalFuel needed
console.log(massArrInts.reduce(calcModuleFuel, 0));
