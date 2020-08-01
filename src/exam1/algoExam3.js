// 순열과 조합, 깃발 주의 지뢰찾기, 소/중 괄호 매칭, 이상한 정수 카운트, 순환배열 낮은 점수 따라 이동하기
// 지형 만들기, 

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

function makeMap(row, col, char, trap) {
    
}