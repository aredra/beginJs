/**
 *
 * 출처: https://www.30secondsofcode.org/js/p/1
 *
 */

// 날짜 기간 차이 구하기
const formatDuration = (ms) => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };
  return Object.entries(time)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
    .join(", ");
};

// 해당월 마지막 날짜 구하기
const lastDateOfMonth = (date = new Date()) => {
  let d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return d.toISOString().split("T")[0];
};

// 현재로부터 몇일 후 날짜 구하기
const daysFromNow = (n) => {
  let d = new Date();
  d.setDate(d.getDate() + Math.abs(n));
  return d.toISOString().split("T")[0];
};

// 형제 element 가져오기
const getSiblings = (el) =>
  [...el.parentNode.childNodes].filter((node) => node !== el);

// 날짜 유효성 검증
const isDateValid = (...val) => !isNaN(new Date(...val).valueOf());

// 반복 Generator
const repeatGenerator = function* (val) {
  let v = val;
  while (true) {
    let newV = yield v;
    if (newV !== undefined) v = newV;
  }
};

// 쓰로틀링 매주기마다 주기적 요청
const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function () {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

// 디바운싱 일정 시간 동안 입력이 더이상 발생하지 않을 때 요청
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

// rgbObject
const toRGBObject = (rgbStr) => {
  const [red, green, blue] = rgbStr.match(/\d+/g).map(Number);
  return { red, green, blue };
};

// camelCase
const toCamelCase = (str) => {
  let s =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join("");
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

// orderBy
const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

// 스크롤이벤트 관련
var lastScrollTop = 0;
var delta = 5;
var fixBox = document.querySelector("#id");
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;

window.onscroll = function (e) {
  didScroll = true;
};

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  var nowScrollTop = window.scrollY;
  if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
    return;
  }
  if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight) {
    //Scroll down
  } else {
    if (nowScrollTop + window.innerHeight < document.body.offsetHeight) {
      //Scroll up
    }
  }
  lastScrollTop = nowScrollTop;
}

// Memoization
class MyObject {
  constructor(data) {
    this.data = data;
    this.data[this.data.length - 2] = { value: "Non-empty" };
  }

  firstNonEmptyItem() {
    return this.data.find((v) => !!v.value);
  }

  firstNonEmptyItemMemo() {
    if (!this.firstNonEmpty)
      this.firstNonEmpty = this.data.find((v) => !!v.value);
    return this.firstNonEmpty;
  }
}

const myObject = new MyObject(Array(2000).fill({ value: null }));

for (let i = 0; i < 100; i++) myObject.firstNonEmptyItem(); // ~4000ms
for (let i = 0; i < 100; i++) myObject.firstNonEmptyItemMemo(); // ~70ms

// Use Proxy object
const memoize = (fn) =>
  new Proxy(fn, {
    cache: new Map(),
    apply(target, thisArg, argsList) {
      let cacheKey = argsList.toString();
      if (!this.cache.has(cacheKey))
        this.cache.set(cacheKey, target.apply(thisArg, argsList));
      return this.cache.get(cacheKey);
    },
  });

const fibonacci = (n) => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
const memoizedFibonacci = memoize(fibonacci);

for (let i = 0; i < 100; i++) fibonacci(30); // ~5000ms
for (let i = 0; i < 100; i++) memoizedFibonacci(30); // ~50ms
