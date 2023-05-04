import { createStore } from 'redux';
// import todoReducer from './TodoReducer';
import todoReducer from './todoReducer';
// import todoReducer from './TodoReducer';
// import todoReducer from './todoReducer';

export const store = createStore(todoReducer);

// reducer state
// console.log(store);
