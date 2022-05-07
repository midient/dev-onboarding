import React, {FormEventHandler, MouseEventHandler, useEffect, useState} from 'react';
import idGeneratorAdapter from './services/idGeneratorAdapter';
import {LocalStoragePersistenceAdapter} from './services/localStoragePersistenceAdapter';
import {useTodoStorageService} from './services/todoStorageAdapter';

function App() {
  const {todos, addTodo, deleteTodo} = useTodoStorageService(new LocalStoragePersistenceAdapter(), idGeneratorAdapter);
  const [isAdding, setAdding] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const hasOpenedBefore = localStorage.getItem('hasOpenedBefore');

    if (!hasOpenedBefore) {
      addTodo({
        text: 'This is a sample todo to get you started. It is only added if it is your first time opening our awesome app!',
      });
      localStorage.setItem('hasOpenedBefore', 'true');
    }
  }, []);

  const addClickHandler: MouseEventHandler = () => {
    if (isAdding) {
      setAdding(false);
      setNewTodo('');
    } else {
      setAdding(true);
    }
  };
  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    addTodo({text: newTodo});
    setAdding(false);
    setNewTodo('');
  };

  return (
    <div>
      <div style={{backgroundColor: 'lightpink', padding: '12px'}}>
        <span style={{WebkitMarginEnd: '12px'}}>Midient Todolist</span>
        <button onClick={addClickHandler}>{isAdding ? 'Cancel' : 'Add'}</button>
      </div>

      {isAdding && (
        <form onSubmit={submitHandler} style={{margin: '12px'}}>
          <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
          <input type="submit" />
        </form>
      )}

      <ol>
        {todos.map((t) => (
          <li key={t.id}>
            <button style={{WebkitMarginEnd: '8px'}} onClick={() => deleteTodo(t.id)}>
              X
            </button>
            <span>{t.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
