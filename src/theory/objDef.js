// obj 복사 1번째 파라미터 망가짐
const exObj = Object.assgin({}, new Object());

function validateCaracterCount(max, items) {
    return items.every(item => item.length < max);
}

function validateCaracterCountWithArg(max) {
    const items = Array.prototype.slice.call(arguments, 1);
    return items.every((item) => item.length < max);
}

const count = {
  get number() {
    return this._num || 0;
  },
  set number(num) {
    this._num = num;
    console.log(num); // 이렇게 일괄적으로 디버깅 가능.
    document.querySelector("#count").textContent = this._num;
  },
};

const count2 = {};
Object.defineProperty(count2, "number", {
  get: function () {
    return this._num || 0;
  },
  set: function (num) {
    this._num = num;
    console.log(this._num); // 이렇게 일괄적으로 디버깅 가능.
    document.querySelector("#count").textContent = this._num; // 중복 제거
  },
});

document.querySelector("#up").addEventListener("click", () => {
  count.number++;
});
document.querySelector("#down").addEventListener("click", () => {
  count.number--;
});

// Debouncing 일정 시간 동안 입력이 없을 경우
let timer;
document.querySelector("#input").addEventListener("input", e => {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        // TODO xhr 호출
        console.log("timer done", e.target.value);
        clearTimeout(timer);
    }, 1000);
});

// Throttling 일정 주기로 계속 호출
document.getElementById("inputText").addEventListener("input", function(e) {
    if (!timer) {
        timer = setTimeout(() => {
            timer = null;
            console.log(e.target.value);            
        }, 1000);
    }
})

// currying - functional programming
Function.prototype.curry = function(one) {
    const origFunc = this;
    const target = origFunc.length;
    let args = [];
    function next(nextOne) {
        args = args.concat(nextOne);
        if (args.length === target) {
            return origFunc.apply(null, args);
        } else {
            return (nextOne) => next(nextOne);
        }
    }
    return next(one);
}

function multiplyFour(w, x, y, z) {
    return w * x * y * z;
}

console.log(multiplyFour.curry(2)(3)(4)(5));
 
// recursion && memoization
const factorial = (function() {
    let save = {};
    const fact = (number) => {
        if (number > 1) {
            const saved = save[number-1] || fact(number-1);
            const result = number * saved;
            save[number] = result;

            console.log(saved, result);
            return result;
        } else {
            return 1;
        }
    }
    return fact;
})();

console.log(factorial(7));

const fibonacci = (function() {
    let save = {};
    const fibo = (number) => {
        if (number < 2) {
            return number;
        } else {
            const saved1 = save[number-1] || fibo(number -1);
            const saved2 = save[number-2] || fibo(number -2);
            const result = saved1 + saved2;
            save[number] = result;
            
            console.log(saved2, saved1, result);
            return result;
        }
    }
    return fibo;
})();

console.log(fibonacci(5));

const identity = field => value => dog => dog[field] === value;
const colorCheck = identity('색상');

getDogNames(dogs, colorCheck('갈색'));

const book = {
    myPoint: 100,
    setEvent() {
        const node = document.getElementById('point');
        node.onclick = this.show.bind(book, node);
    },
    show(node, event) {
        console.log(node.textContent);
        console.log(this.myPoint);
    }
};
book.setEvent();

const closureTest = ((function() {
    let point = 100;
    const getPoint = function(param) {
        return point + param;
    }
    return getPoint;
})());
console.log(closureTest(100));