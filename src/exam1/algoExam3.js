// 순열과 조합

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