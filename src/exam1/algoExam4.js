//페이징 FIFO, LRU, 행렬 돌리기

function pagingCount(page, size, noneTime, existTime) {
    let runtime = 0;
    let temp = [];

    if (size === 0) {
        runtime = noneTime * page.length;
        return runtime;
    }

    for (let i of page) {
        if (temp.includes(i)) {
            runtime += existTime;
            // LRU
            // const idx = temp.indexOf(i);
            // const pp = temp.splice(idx, 1);
            // temp.push(pp[0]);
        } else {
            runtime += noneTime;
            temp.push(i);
            if (temp.length > size) {
                temp.shift();
            }
        }
    }
    return runtime;
}
console.log(pagingCount('IEIFIEFHAFIEIFEH', 5, 6, 1));

function rotateMatrix(matrix) {
    const s = matrix.length;
    let rotate = [];

    for (let i=0; i<s; i++) {
        rotate.push(Array(s).fill(0));
    }

    for (let i=0; i<s; i++) {
        for (let j=0; j<s; j++) {
            rotate[j][s-1-i] = matrix[i][j];
        }
    }

    for (let i = 0;i < s;i++) {
        for (let j = 0;j < s;j++) {
            rotate[i][j] += matrix[i][j];
        }
    }

    return rotate;
}
const mat = [
    [1,1,1,2],
    [2,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
]
console.log(rotateMatrix(mat));