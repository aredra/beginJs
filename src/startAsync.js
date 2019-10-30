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

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function makeError() {
        await sleep(1000);
        const error = new Error();
        throw error;
    }

    //async는 promise를 반환?
    async function process() {
        console.log('안녕하세요!');
        await sleep(1000);
        console.log('반갑습니다.');
        return true;
    }

    async function errorProcess() {
        try {
            await makeError();
        } catch (e) {
            console.log(e);
        }
    }

    process().then(value => {
        console.log(value);
    });

    errorProcess();