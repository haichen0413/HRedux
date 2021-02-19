/**
 * 
 * @param {*} reducer 根据给定的状态树和要处理的动作，返回下一个状态树
 * @param {*} preloadedState 初始状态，
 * @param {*} enhancer 可以根据指定他以增强第三方功能，例如中间件，时间旅行，持久性等等
 */
export default function createStore(reducer, preloadedState, enhancer) {
  // reducer 接收一个state和一个action
  let currentReducer = reducer
  let currentState = preloadedState
  let currentListeners = []
  let nextListeners = currentListeners
  let isDispatch = false

  function getState() {
    return currentState
  }

  function dispatch(action) {
    // 如果action不是一个对象，抛错误
    if (Object.prototype.toString().call(action) !== '[Object object]') {
      throw new Error('action must be object')
    }

    currentState = currentReducer(currentState, action)

  }

  function subscribe(listener) {

    let isSubscribed = true

    nextListeners.push(listener)

    return function unsubscribe() {
      if (!isSubscribed) return 
      
      isSubscribed = false 

      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index,1)

    }
  }

  function replaceReducer(nextReducer) {

  }

  return {
    getState,
    dispatch,
    subscribe,
    replaceReducer
  }
}