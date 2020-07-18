//obj 복사 1번째 파라미터 망가짐
const exObj = Object.assgin({}, new Object());

function validateCaracterCount(max, items) {
    return items.every(item => item.length < max);
}

function validateCaracterCountWithArg(max) {
    const items = Array.prototype.slice.call(arguments, 1);
    return items.every((item) => item.length < max);
}