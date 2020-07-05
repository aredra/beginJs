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

// console.log(mathBrackets(arr));

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


