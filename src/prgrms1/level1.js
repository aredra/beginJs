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

