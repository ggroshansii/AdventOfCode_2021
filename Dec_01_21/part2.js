/*

Considering every single measurement isn't as useful as you expected: there's just too much noise in the data.

Instead, consider sums of a three-measurement sliding window. Again considering the above example:

199  A      
200  A B    
208  A B C  
210    B C D
200  E   C D
207  E F   D
240  E F G  
269    F G H
260      G H
263        H
Start by comparing the first and second three-measurement windows. The measurements in the first window are marked A (199, 200, 208); their sum is 199 + 200 + 208 = 607. The second window is marked B (200, 208, 210); its sum is 618. The sum of measurements in the second window is larger than the sum of the first, so this first comparison increased.

Your goal now is to count the number of times the sum of measurements in this sliding window increases from the previous sum. So, compare A with B, then compare B with C, then C with D, and so on. Stop when there aren't enough measurements left to create a new three-measurement sum.

*/

const { readFile } = require('fs');

let depthsByThree = [];
let depths = [];
let numIncreases = 0;

readFile('./input.txt', (err, data) => {
    if (err) throw err;
    depths = data.toString().split('\n');
    groupIntoThrees();
    findIncreases();
})

function groupIntoThrees() {
    let depthsCopy = depths.slice();
        while(depthsCopy.length > 0) {
            let sum = Number(depthsCopy[0]) + Number(depthsCopy[1]) + Number(depthsCopy[2])
            depthsByThree.push(sum);
            depthsCopy.shift();
        }

        console.log(depthsByThree);
}

function findIncreases() {
    for (let i = 0; i < depthsByThree.length; i++) {
        if (i > 0 && Number(depthsByThree[i]) > Number(depthsByThree[i-1])) {
            numIncreases++;
        }
    }
    console.log(numIncreases); // Answer to first part of questionß
}