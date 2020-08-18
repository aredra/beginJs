// 재귀: 중복의 가능성이 있으며 - 탑다운, 메모라이제이션: 탑다운, DP: 중복을 안함 - bottom up 방식
// 페이징 FIFO, LRU, 행렬 돌리기, 텃밭 크기 확인하기, 택배 결린 시간 체크
// 징검다리 건너는 토끼 체크

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

function areaMaxCheck(area) {
    let temp = area.map(v => v.join(' '));
    let temp2 = temp.join('\n');
    let str = temp2.replace(/1/g, '!').replace(/0/g, '1').replace(/!/g, '0');

    let reversed = [];
    for (let row of str.split('\n')) {
        reversed.push(row.split(' ').map(v => Number(v)));
    }

    const height = reversed.length;
    const width = reversed[0].length;
    
    let max = 0;
    let x, y;

    for (let i=1; i<height; i++) {
        for (let j=1; j<width; j++) {
            if (reversed[i][j] === 1) {
                let min = reversed[i-1][j] > reversed[i][j-1] ? reversed[i][j-1] : reversed[i-1][j];
                min = min > reversed[i-1][j-1] ? reversed[i-1][j-1] : min;
                reversed[i][j] = min + 1;

                if (max < reversed[i][j]) {
                    max = reversed[i][j];
                    x = j;
                    y = i;
                }
            }
        }
    }

    for (let i=y-(max-1); i<y+1; i++) {
        for (let j=x-(max-1); j<x+1; j++) {
            reversed[i][j] = '#';
        }
    }

    console.log(reversed);
}
const area = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
];
console.log(areaMaxCheck(area));

function delivery(n, l) {
    let driver = Array(n).fill(0);
    let answer = 0;

    while (l.length) {
        for (let i in driver) {
            if (!driver[i]) {
                driver[i] = l.shift();
            }
        }

        driver = driver.map(v => v -= 1);
        answer += 1;
    }

    return answer + Math.max.apply(null, driver);
}
console.log(delivery(3, [1,2,1,3,3,3]));

function rabbitStone(rabbits, stones) {
    let answer = [];
    const width = stones.length;

    rabbits.forEach(el => {
        let point = -1;

        while (point < width) {
          point += el;

          if (point >= width) {
            answer.push("pass");
            break;
          }

          if (stones[point]) {
            stones[point] -= 1;
          } else {
            answer.push("fail");
            break;
          }
        }
    });
    return answer;
}
console.log(rabbitStone([2, 1, 5], [1, 2, 1, 4, 5, 2]));