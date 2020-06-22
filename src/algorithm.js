function bubbleSort(arr) {
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

function mergeSort(arr) {    
    if (arr.length <= 1) { return arr;}
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    // console.log(left);
    // console.log(right);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    console.log(left);
    console.log(right);
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}

const arr = [1, 10, 2, 5, 2, 1, 8, 4];

console.log(mergeSort(arr));