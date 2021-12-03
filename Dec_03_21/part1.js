// dataStructure = {index: {0: count, 1:count}}

const input = document.querySelector('pre');

let splitData = input.textContent.split('\n');

let count = {
    0: {zero:0, one:0},
    1: {zero:0, one:0},
    2: {zero:0, one:0},
    3: {zero:0, one:0},
    4: {zero:0, one:0},
    5: {zero:0, one:0},
    6: {zero:0, one:0},
    7: {zero:0, one:0},
    8: {zero:0, one:0},
    9: {zero:0, one:0},
    10: {zero:0, one:0},
    11: {zero:0, one:0},
};

for (let i=0; i<splitData.length; i++) {
    if (splitData[i][0] === "0") {
        count[0].zero = count[0].zero + 1;
    } else {
        count[0].one = count[0].one + 1;
    }
    if (splitData[i][1] === "0") {
        count[1].zero = count[1].zero + 1;
    } else {
        count[1].one = count[1].one + 1;
    }
    if (splitData[i][2] === "0") {
        count[2].zero = count[2].zero + 1;
    } else {
        count[2].one = count[2].one + 1;
    }
    if (splitData[i][3] === "0") {
        count[3].zero = count[3].zero + 1;
    } else {
        count[3].one = count[3].one + 1;
    }
    if (splitData[i][4] === "0") {
        count[4].zero = count[4].zero + 1;
    } else {
        count[4].one = count[4].one + 1;
    }
    if (splitData[i][5] === "0") {
        count[5].zero = count[5].zero + 1;
    } else {
        count[5].one = count[5].one + 1;
    }
    if (splitData[i][6] === "0") {
        count[6].zero = count[6].zero + 1;
    } else {
        count[6].one = count[6].one + 1;
    }
    if (splitData[i][7] === "0") {
        count[7].zero = count[7].zero + 1;
    } else {
        count[7].one = count[7].one + 1;
    }
    if (splitData[i][8] === "0") {
        count[8].zero = count[8].zero + 1;
    } else {
        count[8].one = count[8].one + 1;
    }
    if (splitData[i][9] === "0") {
        count[9].zero = count[9].zero + 1;
    } else {
        count[9].one = count[9].one + 1;
    }
    if (splitData[i][10] === "0") {
        count[10].zero = count[10].zero + 1;
    } else {
        count[10].one = count[10].one + 1;
    }
    if (splitData[i][11] === "0") {
        count[11].zero = count[11].zero + 1;
    } else {
        count[11].one = count[11].one + 1;
    }
}

console.log(count);

let gamma = [];
let episolon = [];

for (let property in count) {
    if (count[property].zero > count[property].one) {
        gamma.push(0);
        episolon.push(1)
    } else {
        gamma.push(1);
        episolon.push(0);
    }
}

console.log(gamma.join(""),episolon)
result = parseInt(gamma.join(""), 2) * parseInt(episolon.join(""), 2)
console.log(result);
