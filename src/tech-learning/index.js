import { createStore } from "./redux.js";

const INCREMENT = "increment";
const RESET = "reset";

function reducer(state = {}, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      count: state.count ? state.count + 1 : 1,
    };
  } else if (action.type === RESET) {
    return {
      ...state,
      count: action.resetCount,
    };
  }
  return state;
}

const store = createStore(reducer);
store.subscribe(update);

function update() {
  console.log(store.getState());
}

function actionCreator(type, data) {
  return {
    ...data,
    type,
  };
}

function increment() {
  store.dispatch(actionCreator(INCREMENT));
}
function reset() {
  store.dispatch(actionCreator(RESET, { resetCount: 10 }));
}

increment();
increment();
increment();
reset();
