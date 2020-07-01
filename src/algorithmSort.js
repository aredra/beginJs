function bubbleSort(arr) {
    let result = arr.slice();

    for (let i=0; i < result.length-1; i++) {
        for (let j=0; j < result.length -1 -i; j++) {
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
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

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

function quickSort(arr) {
    if (arr.length <=1) return arr;
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i=1; i<arr.length; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [1, 10, 2, 5, 2, 1, 8, 4];

console.log(quickSort(arr));