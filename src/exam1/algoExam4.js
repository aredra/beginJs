//페이징 FIFO

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
console.log(pagingCount('ABIEIBEABEJ', 4, 6, 1));