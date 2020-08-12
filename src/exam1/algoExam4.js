// 재귀: 중복의 가능성이 있으며 - 탑다운, 메모라이제이션: 탑다운, DP: 중복을 안함 - bottom up 방식
// 페이징 FIFO, LRU, 행렬 돌리기

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

function fivo(n) {
    let answer = [];
    answer[1] = 1;
    answer[2] = 1;
    for(let i=3; i < 8; i++) {
        answer[i] = answer[i-2] + answer[i-1];
    }

    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fivo(n - 2) + fivo(n - 1);
    }
}

function fact() {
  let answer = 1;
  for (let i = 1; i < 6; i++) {
    answer *= i;
  }

  if (n < 2) {
    return 1;
  } else {
    fact(n - 1) * n;
  }
}