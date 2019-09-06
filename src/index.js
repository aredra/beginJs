const isAnimal = (text) => ['cat', 'dog', 'bird'].includes(text);

console.log(isAnimal('dog'));

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
      console.log('ddd');
    },
    cat() {
      console.log('ccc');
    },
    bird: function() {
      console.log('bbb');
    }
  }
  const task = tasks[animal];
  if (!task) {
    console.log('....?');
    return;
  }
  task();
}
getSound('cat');
getSound('dev');

const add = (a, b) => {
  return a+b;
}

const hello = (str) => console.log(`Hello, ${str}!`);
hello('dev1');

const sum = add(1, 4);
console.log(sum);

const dog = {
  _name: '시베리안허스키',
  sound: '멍멍!',
  say: function() {
    console.log(this.sound);
  },
  set name(value) {
    console.log('dog name is changing!');
    this._name = value;
  },
  get name() {
    return this._name;
  }
};

const cat = {
  name: '페르시안',
  sound: '야옹!'
};

cat.say = dog.say;
dog.say();
cat.say();

const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
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
}

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
console.log(dog.name);
dog.name = '포메라니안';
console.log(dog.name);
numbers.a = 5;
numbers.b = 9;
console.log(numbers.sum);

const arr = [
  {name: 'dogs'},
  {name: 'cats'}
]

arr.push({namn: 'chickens'});

console.log(arr);

 