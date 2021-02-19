import {createStore} from 'redux'

// reducer定义了修改规则
export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default: 
      return state
  }
}

const store = createStore(counterReducer)

export default store