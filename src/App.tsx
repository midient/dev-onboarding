import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';

function App() {
  const [isAdding, setAdding] = useState(false);
  const [todos, setTodos] = useState([] as string[]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const hasOpenedBefore = localStorage.getItem('hasOpenedBefore');

    if (!hasOpenedBefore) {
      updateTodos([
        'This is a sample todo to get you started. It is only added if it is your first time opening our awesome app!',
      ]);
      localStorage.setItem('hasOpenedBefore', 'true');
    }
    loadTodos()
    
  }, []);

  const loadTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]') as string[];
    setTodos(todos);
  }

  const todoInputHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTodo(e.target.value);
  };

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
    updateTodos([...todos, newTodo]);
    setAdding(false);
    setNewTodo('');
  };

  const removeBtnHandler = (index: number) => {
    const clone = [...todos];

    clone.splice(index, 1);
    updateTodos(clone);
  };

  const updateTodos = (todos: string[]) => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setTodos(todos);
  };

  return (
    <div>
      <div style={{backgroundColor: 'lightpink', padding: '12px'}}>
        <span style={{WebkitMarginEnd: '12px'}}>Midient Todolist</span>
        <button onClick={addClickHandler}>{isAdding ? 'Cancel' : 'Add'}</button>
      </div>

      {isAdding && (
        <form onSubmit={submitHandler} style={{margin: '12px'}}>
          <input type="text" onChange={todoInputHandler} />
          <input type="submit" />
        </form>
      )}

      <ol>
        {todos.map((t, index) => (
          <li key={t}>
            <button
              style={{WebkitMarginEnd: '8px'}}
              onClick={() => removeBtnHandler(index)}
            >
              X
            </button>
            <span>{t}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
