export function createStore(reducer, middlewares = []) {
  let state;
  const listeners = [];
  const publish = () => {
    listeners.forEach(({ subscriber, context }) => {
      subscriber.call(context);
    });
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    publish();
  };

  const subscribe = (subscriber, context = null) => {
    listeners.push({
      subscriber,
      context,
    });
  };

  const getState = () => ({ ...state });
  const store = {
    dispatch,
    getState,
    subscribe,
  };

  middlewares = Array.from(middlewares).reverse();
  let lastDispatch = store.dispatch;

  middlewares.forEach((middleware) => {
    lastDispatch = middleware(store)(lastDispatch);
  });

  return { ...store, dispatch: lastDispatch };
}

export const actionCreator = (type, payload = {}) => ({
  type,
  payload: { ...payload },
});
