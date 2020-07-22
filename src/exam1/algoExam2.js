//에라토스테네스의 체, 골드바흐의 추측
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
