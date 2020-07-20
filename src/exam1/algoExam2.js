//에라토스테네스의 체, 골드바흐의 추측
function primeList(n) {
    let sieve = [];
    for (let i = 0; i <  n+1; i++) {
        sieve.push(true);
    }
    const v = sieve;
    console.log(v);
    
    let m = parseInt(n ** 0.5, 10);
    console.log(n ** 0.5);
    
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

// const arr = [];
// for (let i=0; i<100; i++) {
//     arr.push(`${i+1}. 제가 돈이 ${i+1}원 부족하여 셔틀을 탈 수 없습니다.`);
// }

// console.log(arr);
