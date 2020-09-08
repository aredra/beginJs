//  출처 : https://programmers.co.kr/

// 같은 숫자는 싫어
function hateSameNum(arr) {
  return arr.reduce((acc, el, idx, arr) => {
    if (!idx) acc.push(el);
    if (acc.length && acc[acc.length - 1] !== el) {
      acc.push(el);
    }
    return acc;
  }, []);
}

//번외 같은 숫자 만큼 무료
let totalCnt = 0;
const freeUnit = 5;
function setTotalCount(value, fare) {
  totalCnt += value;
  const tmpCnt = Math.floor(totalCnt / freeUnit);
  const tmpRemain = totalCnt % freeUnit;
  let realCnt = 0;
  let freeCnt = 0;
  let cntStr = "";

  if (tmpCnt % 2 == 0) {
    realCnt += tmpRemain;
    realCnt += Math.floor(tmpCnt / 2) * freeUnit;
    freeCnt += Math.floor(tmpCnt / 2) * freeUnit;
  } else {
    freeCnt += tmpRemain;
    realCnt += (Math.floor(tmpCnt / 2) + 1) * freeUnit;
    freeCnt += Math.floor(tmpCnt / 2) * freeUnit;
  }

  cntStr += freeCnt == 0 ? realCnt : realCnt + " (+" + freeCnt + ")";
  totalFare = fare * realCnt;

  return {
    resultText: cntStr,
    fare: totalFare,
  };
}

// 체육복 도난사건
function gymSuitGone(n, lost, reserve) {
  const students = Array(n).fill(1);
  lost.forEach((el) => {
    students[el - 1] -= 1;
  });
  reserve.forEach((el) => {
    students[el - 1] += 1;
  });
  const answer = students
    .map((v, idx) => {
      if (!v) {
        if (students[idx - 1] && students[idx - 1] > 1) {
          v += 1;
          students[idx - 1] -= 1;
        } else if (students[idx + 1] && students[idx + 1] > 1) {
          v += 1;
          students[idx + 1] -= 1;
        }
      }
      return v;
    })
    .filter((v) => v > 0).length;
  return answer;
}

//카카오 죠르디
function kakaoCrain(board, moves) {
  const stack = [0];
  let answer = 0;

  while (moves.length) {
    const col = moves.shift() - 1;
    for (let row in board) {
      if (board[row][col]) {
        if (board[row][col] === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[row][col]);
        }
        board[row][col] = 0;
        break;
      }
    }
  }
  return answer;
}

// 문자열 순서 내맘대로
function customStringSort(strings, n) {
  return strings.sort((a, b) => {
    return a.charCodeAt(n) === b.charCodeAt(n)
      ? (a > b) - (a < b)
      : a.charCodeAt(n) - b.charCodeAt(n);
  });
}

//문자열 내림차순
function stringDesc(s) {
  return s.split("").sort().reverse().join("");
}
