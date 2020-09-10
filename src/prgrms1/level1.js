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

//시저 암호
function caesarCipher(s, n) {
  return s
    .split("")
    .map((el) => {
      let tempAscii = 0;
      if (el === " ") {
        return el;
      } else if (el.charCodeAt(0) > 64 && el.charCodeAt(0) < 91) {
        tempAscii =
          el.charCodeAt(0) + n > 90
            ? Math.abs(el.charCodeAt(0) + n - 90) + 64
            : el.charCodeAt(0) + n;
        return String.fromCharCode(tempAscii);
      } else if (el.charCodeAt(0) > 96 && el.charCodeAt(0) < 123) {
        tempAscii =
          el.charCodeAt(0) + n > 122
            ? Math.abs(el.charCodeAt(0) + n - 122) + 96
            : el.charCodeAt(0) + n;
        return String.fromCharCode(tempAscii);
      }
    })
    .join("");
}

//이상한 문자열 만들기
function strangerString(s) {
  return s
    .split("")
    .map((str) => {
      return str.split("").map((c, idx) => {
        return idx % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
      });
    })
    .join(" ");
}

//키패드 누르기
function keypadHand(numbers, hand) {
  const leftSide = [1, 4, 7];
  const rightSide = [3, 6, 9];

  const leftDiff = {
    1: { 2: 1, 5: 1.5, 8: 2.5, 0: 3.5 },
    4: { 2: 1.5, 5: 1, 8: 1.5, 0: 2.5 },
    7: { 2: 2.5, 5: 1.5, 8: 1, 0: 1.5 },
    2: { 2: 0, 5: 1, 8: 2, 0: 3 },
    5: { 2: 1, 5: 0, 8: 1, 0: 2 },
    8: { 2: 2, 5: 1, 8: 0, 0: 1 },
    0: { 2: 3, 5: 2, 8: 1, 0: 0 },
    "*": { 2: 4, 5: 2, 8: 2, 0: 1 },
  };
  const rightDiff = {
    3: { 2: 1, 5: 1.5, 8: 2.5, 0: 3.5 },
    6: { 2: 1.5, 5: 1, 8: 1.5, 0: 2.5 },
    9: { 2: 2.5, 5: 1.5, 8: 1, 0: 1.5 },
    2: { 2: 0, 5: 1, 8: 2, 0: 3 },
    5: { 2: 1, 5: 0, 8: 1, 0: 2 },
    8: { 2: 2, 5: 1, 8: 0, 0: 1 },
    0: { 2: 3, 5: 2, 8: 1, 0: 0 },
    "#": { 2: 4, 5: 2, 8: 2, 0: 1 },
  };
  let left = "*";
  let right = "#";
  let answer = "";

  numbers.forEach((num) => {
    if (leftSide.includes(num)) {
      left = num;
      answer += "L";
    } else if (rightSide.includes(num)) {
      right = num;
      answer += "R";
    } else {
      const leftDistance = leftDiff[left][num];
      const rightDistance = rightDiff[right][num];
      console.log(leftDistance, rightDistance);
      if (leftDistance < rightDistance) {
        left = num;
        answer += "L";
      } else if (rightDistance < leftDistance) {
        right = num;
        answer += "R";
      } else {
        hand === "left"
          ? (() => {
              left = num;
              answer += "L";
            })()
          : (() => {
              right = num;
              answer += "R";
            })();
      }
    }
    console.log(num, left, right, answer);
  });

  return answer;
}

keypadHand([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
