import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import './assets/css/styles.css';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [todos, setTodo] = useState([]);
  const isRef = useRef(3);

  const onCreate = (content) => {
    setTodo([
      {
        id: isRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
      ...todos,
    ]);
  };

  const onUpdate = (targetId) => {
    setTodo(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const onDelete = (targetId) => {
    setTodo(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </>
  );
}

export default App;
