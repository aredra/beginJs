const isAnimal = text => ["cat", "dog", "bird"].includes(text);

console.log(isAnimal("dog"));

function getSound(animal) {
  // if (animal === 'cat') return 'ccc';
  // if (animal === 'dog') return 'ddd';
  // if (animal === 'bird') return 'bbb';
  // return '....?';
  // const sounds = {
  //   cat: 'ccc',
  //   dog: 'ddd',
  //   bird: 'bbb'
  // }
  // return sounds[animal] || '....?';
  const tasks = {
    dog: () => {
      console.log("ddd");
    },
    cat() {
      console.log("ccc");
    },
    bird: function() {
      console.log("bbb");
    }
  };
  const task = tasks[animal];
  if (!task) {
    console.log("....?");
    return;
  }
  task();
}
getSound("cat");
getSound("dev");

const add = (a, b) => {
  return a + b;
};

const hello = str => console.log(`Hello, ${str}!`);
hello("dev1");

const sum = add(1, 4);
console.log(sum);

const dog = {
  _name: "시베리안허스키",
  sound: "멍멍!",
  say: function() {
    console.log(this.sound);
  },
  set name(value) {
    console.log("dog name is changing!");
    this._name = value;
  },
  get name() {
    return this._name;
  }
};

const cat = {
  name: "페르시안",
  sound: "야옹!"
};

cat.say = dog.say;
dog.say();
cat.say();

const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
console.log(dog.name);
dog.name = "포메라니안";
console.log(dog.name);
numbers.a = 5;
numbers.b = 9;
console.log(numbers.sum);

const arr = [{ name: "dogs" }, { name: "cats" }];

arr.push({ namn: "chickens" });

console.log(arr);

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
};

const ddog = new Animal("dog", "ddoggy", "walwal");

ddog.say();

class animalType {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class dogClass extends animalType {
  constructor(name, sound) {
    super("허스키", name, sound);
  }
}

const huskyDog = new dogClass("gigigi", "walwlawlalsld");
huskyDog.say();

const slime = {
  name: "슬라임"
};

const cuteSlime = {
  ...slime,
  attribute: "cute"
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: "purple"
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

const numbersss = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbersss, 1000, ...numbersss];
console.log(spreadNumbers);

const purCuteSlime = {
  name: "슬라임",
  attribue: "cute",
  color: "purple"
};

const { color, ...rest } = purCuteSlime;
console.log(color);
console.log(rest);

const num = [0, 123, 54, 4, 5, 3, 5];
const [one, ...restt] = num;
console.log(restt);

//function params ...rest
function superSum(...params) {
  return params.reduce((acc, curr) => acc + curr, 0);
}

console.log(superSum(1, 2, 3, 4));

// function에 params function 사용에 넣어지는 parmas는 인자
console.log(superSum(...num));

function max(...rest) {
  return rest.reduce((acc, curr) => (acc < curr ? curr : acc), 0);
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);

function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    callback(end - start);
  }, 0);
}

console.log("work1 start!");
work(ms => {
  console.log("work1 end!");
  console.log(ms + "ms over!");
});
console.log("work2 start!");

// function increaseAndPrint(n, callback) {
//   setTimeout(() => {
//     const increased = n+1;
//     console.log(increased);
//     if (callback) {
//       callback(increased);
//     }
//   }, 1000);
// }

// increaseAndPrint(0, n => {
//   increaseAndPrint(n, n => {
//     increaseAndPrint(n, n => {
//       increaseAndPrint(n, n => {
//         increaseAndPrint(n, n => {
//           console.log('work end');
//         })
//       })
//     })
//   })
// });

function increaseAndPrint2(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFive";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint2(0)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .catch(e => {
    console.error(e);
  });
