//에라토스테네스의 체, 골드바흐의 추측, matrix 연산가능 여부
function primeList(n) {
    let sieve = [];
    for (let i = 0; i <  n+1; i++) {
        sieve.push(true);
    }    
    let m = parseInt(n ** 0.5, 10);
    
    for (let i = 2; i < m+1; i++) {
        if (sieve[i] === true) {
            for(let j = i+i; j < n+1; j+=i ) {
                sieve[j] = false;
            }
        }
    }

    let primeList = [];
    for (let i = 2; i <  n+1; i++) {
        if (sieve[i] === true) {
            primeList.push(i);
        }
    }

    return primeList;
}
console.log(primeList(43));

function goldbachFunction(n) {
    let primeList = this.primeList(n);
    let result = [];

    for (let i=0; i < primeList.length/2; i++) {
        const tmpVal = primeList[i]
        if (primeList.includes(n - tmpVal)) {
          result.push([tmpVal, n - tmpVal]);
        }
    }

    const diff = result.map(v => v[1] - v[0]);
    const idx = diff.indexOf(Math.min.apply(null, diff));

    return result[idx];
}
console.log(goldbachFunction(100));

const aMatrix = [[1, 2], 
[3, 1]];
const bMatrix = [[1, 2], 
[3, 1]];

function matrixSolution(a, b) {
    let result = [];
    const len = a.length;

    if (len === b[0].length) {
        for (let i=0; i<len; i++) {
            let tmpRow = [];
            for (let j = 0; j < len; j++) {
                let tmp = 0;
                for (let k = 0; k < len; k++) {
                    tmp += (a[i][k] * b[k][j]);
                }
                tmpRow.push(tmp);
            }
            result.push(tmpRow);
        }
    }
    return result.length ? result : "불가능한 연산입니다.";
}

console.log(matrixSolution(aMatrix, bMatrix));