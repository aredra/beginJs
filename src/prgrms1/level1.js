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
        fare: totalFare
    }
}