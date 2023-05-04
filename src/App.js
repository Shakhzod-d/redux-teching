import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import React from 'react';

function App() {
  const [value, setValue] = React.useState('');
  const { todoList } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(todoList);

  const addTodo = () => {
    const newTodo = {
      todoTitle: value,
      id: Date.now(),
      isCompleted: false,
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setValue('');
    // console.log(newTodo);
  };

  return (
    <div className="App">
      <div className="addNewTodoContainer">
        <input
          type="text"
          value={value}
          onChange={({ target }) => setValue(target.value)}
          placeholder="Enter todo title"
        />
        <button onClick={addTodo}>Add todo</button>
      </div>
      <div>
        {todoList.map((todoObj) => {
          // console.log(todoObj);
          return <p key={todoObj.id}>{todoObj.todoTitle}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
