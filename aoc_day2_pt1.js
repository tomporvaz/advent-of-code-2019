const fs = require('fs');

//read in data
let inputArr = fs.readFileSync('day2_input.txt', 'utf8')
.split(',')
.filter(Boolean);


//map function converts array of data to integers
inputArr = inputArr.map((input) => parseInt(input));


/* inputArr.map((input) => {
    console.log(typeof input);
    console.log(input);
}); */

for(let i = 0; i < 100; i++){
    for(let j = 0; j < 100; j++){
        let testArr = [...inputArr];
        testArr[1] = i;
        testArr[2] = j;
        intcodeRun(testArr);
        let intcodeResult = testArr[0];

        if (intcodeResult === 19690720){
            console.log(`Hot dog, we have a weiner, ${i} and ${j} `)
        }
    }
} 

/* 
intcodeRun(inputArr);
console.log(`intcode result: ${inputArr[0]}`);
 */

 function intcodeRun(intcode){
    for(let i = 0; i < intcode.length / 4; i++){
        let result = instructionCompute(i, intcode);

        if(result === 'opcode99'){
            break;
        } else if (result === 'opcodeUnknown'){
            break;
        };
    }
}

//console.log(inputArr);


function instructionCompute(iteration, intcodeArr) {
    //slice array into nth 4 item grouping
    let sliceStart = iteration * 4;
    let sliceEnd = sliceStart + 4;
    let fourPositionArr = intcodeArr.slice(sliceStart, sliceEnd);
    //console.log(`fourPositionArr: ${fourPositionArr}`);
    
    //compute intcode to return value and location of value
    
    let opcode = fourPositionArr[0];
    let input1 = intcodeArr[fourPositionArr[1]];
    let input2 = intcodeArr[fourPositionArr[2]];
    let outputLocation = fourPositionArr[3];
    let outputValue;
    
    if(opcode === 99){
        //console.log(`Opcode 99: program finished at grouping ${iteration}`);
        return 'opcode99';
    } else if ( opcode === 1 ){
        outputValue = input1 + input2;
    } else if ( opcode === 2 ) {
        outputValue = input1 * input2;
    } else {
        //console.log(`Error: opcode ${opcode} unknown in grouping ${iteration}`);
        return 'opcodeUnkown';
    }
    
    //update number at given location with given value
    intcodeArr[outputLocation] = outputValue;
    
    //console.log(`Output Value: ${outputValue}`);
}




