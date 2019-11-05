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

    const getDogName = async () => {
      await sleep(1000);
      return '허스키';
    }

    const getCatName = async () => {
      await sleep(500);
      return '향단이';
    }
    
    const getDragonName = async () => {
      await sleep(5000);
      return '투쓸리스';
    }
    //순서대로 처리될까지 기다렸다가 순차적 진행
    async function getName() {
      const dogName = await getDogName(); 
      console.log(dogName);
      const catName = await getCatName();
      console.log(catName);
      const dragonName = await getDragonName();
      console.log(dragonName);
    }

    //전체를 병렬 진행 가장 처리 속도가 늦은 함수가 전체 처리 속도;
    async function getNameAll() {
      const start = Date.now();
      const nameAll = await Promise.all([getCatName(), getDogName(), getDragonName()]);
  //    const [cat, dog, dragon] = await Promise.all([getCatName(), getDogName(), getDragonName()]);
      console.log(Date.now() - start);
      console.log(nameAll);
    }

    //가장 처리가 빠른 함수가 전체 처리 속도, 처리가 늦은 값에서 오류가 발생 시 체크하지 않음
    async function getNameRace() {
      try {
        const nameRace = await Promise.race([getCatName(), getDogName(), getDragonName()]);
        console.log(nameRace);
      } catch (e) {
        throw e;
      }
    }

    getName();
    getNameAll();
    getNameRace();