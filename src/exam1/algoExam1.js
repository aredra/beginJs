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