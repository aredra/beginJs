// Immediate Invoked Function Expression
const iife = (function () {
  let a = 10;
  function b() {
    console.log(a);
  }
  return b();
})();

// singleton
const singleton = (function () {
  let instance = null;
  let a = "aredra";
  function initiate() {
    return {
      a,
      b() {
        alert(a);
      },
    };
  }
  return {
    getInstance() {
      if (!instance) {
        instance = initiate();
      }
      return instance;
    },
  };
})();

// sington2
const singletonify = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, argumentsList) => {
      if (!this.instance)
        this.instance = new target(...argumentsList);
      return this.instance;
    }
  });
}
// example
class MyClass {
  constructor(msg) {
    this.msg = msg;
  }

  printMsg() {
    console.log(this.msg);
  }
}

MySingletonClass = singletonify(MyClass);

const myObj = new MySingletonClass('first');
myObj.printMsg();           // 'first'
const myObj2 = new MySingletonClass('second');
myObj2.printMsg();           // 'first'


// abstract factory pattern
const abstractJobsFactory = (function() {
    let jobs = {};
    
    return {
        create: (job, name) => {
            const JobObj = jobs[job];
            return JobObj ? new JobObj(name) : null;
        },
        addJob: (job, jobObj) => {
            jobs[job] = jobObj;
        },
    }
})();

const Police = (function() {
    let skill = {};
    let name = "";
    let etc = {};
    
    function Police(obj = {}) {
        for (let val of Object.keys(obj)) {
            if (this[val]) this[val] = val;
        };
    };
    Police.prototype.action = () => {
        console.log(this.name + "shot the gun");
    };
    return Police;
})();

const Firefighter = (function () {
    let name = "";
    function Firefighter(obj = {}) {
        for (let val of Object.keys(obj)) {        
        this[val] = obj[val];
        }
    }

    Firefighter.prototype.action = function() {
        console.log(this.name + " remove the fire");
    };
    Firefighter.prototype.say = () => {
        console.log(`blah blah`);
    }
    return Firefighter;
})();

abstractJobsFactory.addJob("police", Police);
abstractJobsFactory.addJob("firefighter", Firefighter);

const f1 = abstractJobsFactory.create("firefighter", {name: "joro"});
f1.action();
f1.say();