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
  const position = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  const rowIdx = 0;
  const colIdx = 1;

  let left = "*";
  let right = "#";
  let answer = "";

  numbers.forEach((num) => {
    if (num % 3 === 1) {
      left = num;
      answer += "L";
    } else if (num && num % 3 === 0) {
      right = num;
      answer += "R";
    } else {
      const leftDistance =
        Math.abs(position[left][rowIdx] - position[num][rowIdx]) +
        Math.abs(position[left][colIdx] - position[num][colIdx]);
      const rightDistance =
        Math.abs(position[right][rowIdx] - position[num][rowIdx]) +
        Math.abs(position[right][colIdx] - position[num][colIdx]);

      if (leftDistance === rightDistance) {
        answer += hand === "left" ? "L" : "R";
        hand === "left" ? (left = num) : (right = num);
      } else {
        answer += leftDistance < rightDistance ? "L" : "R";
        leftDistance < rightDistance ? (left = num) : (right = num);
      }
    }
    console.log(num, left, right, answer);
  });

  return answer;
}

// 최소공배수, 최대공약수
function lcmAndGcd(n, m) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const lcm = (n * m) / gcd(n, m);

  return [gcd(n, m), lcm];
}

//콜라츠 추측
function collatzConjecture(num) {
  let answer = 0;
  while (num !== 1 && answer < 501) {
    if (num % 2 === 0) {
      num /= 2;
      answer += 1;
    } else {
      num *= 3;
      num += 1;
      answer += 1;
    }
  }
  return answer === 501 ? -1 : answer;
}

// 예산으로 최대 지원부서 구하기
function maxDept(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b).some((v) => {
    budget -= v;
    if (budget < 0) {
      return true;
    }
    answer += 1;
  });

  return answer;
}

// 보물지도
function treasureMap(n, arr1, arr2) {
  const biArr1 = arr1.map((el) => {
    return el.toString(2).padStart(n, "0");
  });
  const biArr2 = arr2.map((el) => {
    return el.toString(2).padStart(n, "0");
  });

  return biArr1.map((el, idx) => {
    const r1 = el
      .split("")
      .map((v, strIdx) => {
        if (!Number(v)) {
          return parseInt(biArr2[idx][strIdx], 10) ? "#" : " ";
        }
        return "#";
      })
      .join("");
    return r1;
  });
}

(function () {
  const part = [
    { name: "FE", value: 3 },
    { name: "BE", value: 2 },
    { name: "iOS", value: 1 },
    { name: "Android", value: 0 },
  ];

  const text = part
    .filter((v) => v && v.value > 0)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .reduce((acc, el, idx) => {
      return (acc += `${idx + 1}) ${el.name} 개발\n`);
    }, "");
  console.log(text);
  return text;
})();

// 각 항목에 대한 동일한 interest 값은 있을 수 없다.
const subjects = [];

const favoriteSubjects = (subjects) => {
  const bestSixSubjects = [];

  subjects.forEach((subject) => {
    if (bestSixSubjects.length >= 6) {
      bestSixSubjects
        .sort((a, b) => {
          return b.interest - a.interest;
        })
        .pop();
    }
    bestSixSubjects.push(subject);
  });

  const text =
    bestSixSubjects.reduce((acc, el, idx) => {
      return (acc += `${el.name} ${el.grade}${
        idx === bestSixSubjects.length - 1 ? "" : ", "
      }`);
    }, "[") + "]";

  return text;
};
