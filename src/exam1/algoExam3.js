// 순열과 조합, 깃발 주의 지뢰찾기, 소/중 괄호 매칭, 이상한 정수 카운트, 순환배열 낮은 점수 따라 이동하기
// 지형 만들기, 키보드 망가짐!!

function combination(charArr, n) {
    let combi = [];

    const f = (pre, charArr) => {
        for (let i =0; i < charArr.length; i++) {
            combi.push(pre + charArr[i]);
            f(pre + charArr[i], charArr.slice(i+1));
        }
    };

    f('', charArr);

    return result = combi.filter(v => v.length  === n);
}
console.log(combination(['a', 'b', 'c', 'd', 'e'], 3));

function mineSearch() {

}
console.log(mineSearch());

function matchingBracket(bracketStr) {
    const m = {
        ')': '(',
        '}': '{'
    }
    let stack = [];

    for (let i in bracketStr) {
        if (bracketStr[i] === "(" || bracketStr[i] === "{") {
            stack.push(bracketStr[i]); 
        } else if (m[bracketStr[i]]) {
            if (stack.length === 0) {
                return false;
            } else {
                let t = m[bracketStr[i]];
                if (t != stack.pop()) {
                    return false;
                }
            }
        }
    }
    return !stack.length;
}
console.log(matchingBracket("((){})"));

function combiNumCnt(n) {
    if (n === 1) {
        return 1;
    }
    let answer = '1';
    for (let i = 1; i < n; i++) {
        answer = rule(answer);
    }
    return answer;
}

function rule(answer) {
    const max = Math.max(...answer);
    let result = '';

    for (let i = 1; i <= max; i++) {
        let reg = new RegExp(i, 'g');
        let temp = answer.match(reg) || [];

        if (temp.length) {
            result += i + String(temp.length);
        }
    }
    return result;
}
console.log(combiNumCnt(8));

const dishList = [5, 2, 3, 1, 2, 5];
const goal = 1;
function moveCnt(list, goal) {
    let result = 0;
    goal -= 1;

    let s = list.slice().sort((a, b) => a-b);

    while (true) {
        let p = list.shift();
        if (s[0] === p) {
            if (goal === 0){
                break;
            }
            goal -= 1;
            s.shift();
        } else {
            list.push(p);
            if (goal === 0) {
                goal = list.length - 1;
            } else {
                goal -=1;
            }
        }
        result += 1;
    }
    return result;
}
console.log(moveCnt(dishList, goal));

function makeMap(row, col, char, trap, move) {
    let areaMap =[];
    let charCol = char[0]+1;
    let charRow = char[1]+1;

    for(let i = 0; i < col + 2; i++) {
        areaMap.push(Array(row+2).fill(0));
    }

    for(let i in areaMap) {
        for(let j in areaMap[0]) {
            i = Number(i);
            j = Number(j);
            if (!i || !j || j === areaMap[0].length-1 || i === areaMap.length-1) {
                areaMap[i][j] = 2;
            }
        }
    }

    areaMap[charCol][charRow] = 1;
    
    for (let i of trap) {
        if (areaMap[i[0]+1][i[1]+1] == 1) {
            continue;
        } else {
            areaMap[i[0]+1][i[1]+1] = 3;
        }
    }
    console.log(areaMap);

    for(let i of move) {
        areaMap[charCol][charRow] = 0;
        switch (i) {
          case 1:
              console.log("상");
              if (
                areaMap[charCol - 1][charRow] == 0
              ) {
                  charCol -= 1;
              }
            break;
          case 2:
            console.log("하");
            if (
                areaMap[charCol + 1][charRow] == 0
            ) {
                charCol += 1;
            }
            break;
          case 3:
            console.log("좌");
            if (
                areaMap[charCol][charRow - 1] == 0
            ) {
                charCol -= 1;
            }
            break;
          case 4:
            console.log("우");
            if (
                areaMap[charCol][charRow + 1] == 0
            ) {
                charRow += 1;
            }
            break;
          default:
            break;
        }
    }
    areaMap[charCol][charRow] = 1;
    console.log(areaMap);
}
makeMap(
  5,
  4,
  [0, 0],
  [
    [0, 1],
    [1, 1],
    [2, 3],
    [1, 3],
  ],
  [2,2,2,4,4,4]
);

function keyboardHelper(payload) {
    const people = payload.split('\n');
    const detail = [];
    const result = [];

    for (let i of people) {
        let j = i.split(',');
        let k = j.slice(1, j.length-2);
        detail.push(k);
    }

    let strArr = [];
    for (let i of detail) {
        strArr.push(i.join(''));
    }

    for (let i  of strArr) {
        let first = "";
        let second = "";
        for (let j of i.trim()) {
            if (j != '\'') {
                if (j == 3) {
                    first += '1';
                    second += '2';
                } else if (j == 4) {
                    first += '2';
                    second += '2';                  
                } else if (j ==6) {
                    first += '1';
                    second += '5';                                    
                } else {
                    first += j;
                    second += '0';              
                }
            }
        }
        result.push([Number(first), Number(second)]);
    }
    console.log(result);
}

keyboardHelper(`dummy, '333,356,766', 'dummy', 'dummy'
dum, '5,000,000', 'dume', 'fuufie'
asdf, '3,300,000', 'dief', 'efiieifif`);