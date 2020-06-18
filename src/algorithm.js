function bubble(arr) {
    let result = arr.slice();

    for (let i=0; i < result.length-1; i++) {
        for (let j=0; j < result.length -1 -i; j++) {
            console.log(j);
            console.log(result[j+1]);
            if (result[j] > result[j+1]) {
                let val = result[j];
                result[j] = result[j+1];
                result[j+1] = val;
            }
        }
     }
     return result
}

const arr = [1, 10, 2, 5, 2, 1, 8, 4];

console.log(bubble(arr));