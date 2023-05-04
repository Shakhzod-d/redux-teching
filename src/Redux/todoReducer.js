import React from 'react';

const initialState = {
  todoList: [],
  isOpen: false,
};

const addTodo = (state, newTodoObj) => {
  //   console.log(newTodoObj);
  return {
    ...state,
    todoList: [...state.todoList, newTodoObj],
  };
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action.payload);
    default:
      return state;
  }
};

export default todoReducer;
// men shu loyhani bajaryapman