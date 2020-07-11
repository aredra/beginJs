//가로 맞추기, 하노이의 탑, 정수 개수 세기, 문자열 압축,  특정 정수 적은 수로 나누기

function mathBrackets(arr) {
    const param = arr.split("");
    console.log(param);
    
    let count = 0;

    param.forEach((el) => count += el === "(" ? 1 : -1);
    if (count) return false;

    let bracket = [];

    for (let i in param) {
      if (param[i] === "(") {
        bracket.push(param[i]);
      }
      if (param[i] === ")") {
        if (!bracket.length) return false;
        bracket.pop();
      }
    }
    return true;
}

const arr = "(()(()))()";

console.log(mathBrackets(arr));

const route = [];

function hanoi(num, start, end, temp) {
  if (num === 1) {
    route.push([start, end]);
    return NaN;
  }

  hanoi(num-1, start, temp, end);
  route.push([start, end]);
  hanoi(num-1, temp, end, start);
}

console.log(hanoi(4, "A", "C", "B"));
console.log(route);

function countNumber(start, end, num) {
  let str = '';
  let count = 0;
  // 2n 과 n*n
  for (let i=start; i<=end; i++) {
    str += i;
  }
  
  console.log(str.match(/1/g).length);

  for (let k of str) {    
    if (Number(k) === num) count++;
  }

  return count;
}

function countAllNumber(start, end) {
  const obj = {};

  for (let i=start; i<=end; i++) {
    let tmp = i;
    while (tmp > 0) {
      let num = tmp%10;
      if (obj[num]) obj[num]++;
      else obj[num] = 1;
      tmp = Math.floor(tmp/10);
    }
  }

  return obj;
}

console.log(countAllNumber(1, 99));

const complexStr = "aaaabbhhcccdddddfeff"

function compressChar(str) {
  let result = "";
  let currChar = str[0];
  let count = 1;

  for (let i of str) {
    if (currChar === i) {
      count++;
    } else {
      result += currChar+count;
      currChar = i;
      count = 1;
    }
  }
  result += currChar + count;
  return result;
}

console.log(compressChar(complexStr));

function countBy73(num) {
  let temp = num
  let result =0;
  while(true) {
    if(temp%7 == 0) {
      result += parseInt(temp/7, 10);
      break;
    }
    temp -= 3;
    result +=1;
    if (temp < 0) {
      result = -1;
      break;
    }
  }
  return result;
}

console.log(countBy73(1));