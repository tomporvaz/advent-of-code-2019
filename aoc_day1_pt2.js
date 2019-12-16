const fs = require('fs');

//read in data
let massArr = fs.readFileSync('module-mass.txt', 'utf8')
    .split('\n')
    .filter(Boolean);


//map function converts array of data to integers
let massArrInts = massArr.map((mass) => parseInt(mass));

//massArrInts = [50];


//seperate function to calculate fuel for a module or any mass
const calcModuleFuel = (mass) => {
    return parseInt(mass / 3) - 2;
}

//reducer function caculcates the fuel needed for one module and adds to totalFuel accumulator
const calcTotalFuel = (totalFuel, currentModule) => {
    console.log(`current module: ${currentModule}`);

    let singleFuel = currentModule;
    let fuel = 0;

    do{
        singleFuel = calcModuleFuel(singleFuel);
        if(singleFuel > 0){fuel += singleFuel};
    }
    while(singleFuel > 0);

    console.log(`Module Fuel: ${fuel}`);
    
    return totalFuel + fuel;
};

//reduce function iterates through array with reducer function, accumulating totalFuel needed
console.log(massArrInts.reduce(calcTotalFuel, 0));
