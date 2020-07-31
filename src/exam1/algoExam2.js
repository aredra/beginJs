// 에라토스테네스의 체, 골드바흐의 추측, matrix 연산가능 여부,DFS, BFS
// 최단/최장 거리 탐색, 앨리스 369, 지뢰찾기, 연속된문자열 개수, 순환 리스트
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

const graph = {
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E', 'F'],
    'E': ['D', 'A'],
    'F': ['D'],
}

function dfs(graph, startNode) {
    let visited = [];
    let stack = [startNode];

    while (stack.length) {
        const tmp = stack.pop();
        if (!visited.includes(tmp)) {
            visited.push(tmp);
            let sub = graph[tmp].filter(v => !visited.includes(v));
            for (let i of sub) {
                stack.push(i);
            }
        }
    }

    return visited;
}
console.log(dfs(graph, 'E'));

function bfs(graph, startNode) {
  let visited = [];
  let queue = [startNode];

  while (queue.length) {
    const tmp = queue.shift();
    if (!visited.includes(tmp)) {
      visited.push(tmp);
      let sub = graph[tmp].filter((v) => !visited.includes(v));
      for (let i of sub) {
        queue.push(i);
      }
    }
  }

  return visited;
}
console.log(bfs(graph, "E"));

function alice369(param) {
    let result = 0;
    let count = 1;
    const obj = {3: 1, 6: 2, 9: 3};

    while(param.length) {
        result += obj[param.pop()]*count;
        count *= 3;
    }

    return result || '정확한 계산을 할 수 없습니다.';
}
const alice369Input = '36'.split('');
console.log(alice369(alice369Input));

const searchArea = 4;
const mineArea = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

function searchMaxMine(find, mineArea) {
    const areaSize = mineArea.length;
    let resultArr = [];

    for (let xCnt = 0; xCnt <= areaSize-find; xCnt++) {
        for (let yCnt= 0; yCnt <=areaSize-find; yCnt++) {
            let value = 0;
            for(let i = xCnt; i < xCnt+find; i++) {
                for(let j = yCnt; j <yCnt+find; j++) {
                    value += mineArea[i][j];
                }
            }
            resultArr.push(value);
            value = 0;
        }
    }

    console.log(resultArr);
    return Math.max.apply(null, resultArr);
}
console.log(searchMaxMine(searchArea, mineArea));

function sequentialChar(str) {
    let result = [];
    for (let i = 1; i < str.length + 1; i++) {
        for (let j = 0; j < i; j++) {
            result.push(str.slice(j, j + str.length + 1 - i));
        }
    }
    return result;
}
const inputStr1 = "ABIEFIIEFHS";
const inputStr2 = "ABIEFEHIEIFISH";
const arrStr1 = sequentialChar(inputStr1);
const arrStr2 = sequentialChar(inputStr2);

let inter = arrStr1.filter(v => arrStr2.includes(v));
inter.sort((a, b) => {
    return a.length - b.length;
})
console.log(inter.pop().length);

function circleArr(totalCnt, passingUnit) {
    let q =[];
    let idx = 0;

    for (let i = 0; i < totalCnt; i++) {
        q.push(i+1);
    }
    while (q.length > passingUnit-1) {
        if (idx > q.length - 1) {
            idx -= q.length;
        }
        q.splice(idx, 1);
        idx -= 1;
        idx += passingUnit;
    }

    return q;
}
console.log(circleArr(7, 4));

