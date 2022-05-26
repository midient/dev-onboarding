import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { useTodoStorageService } from './services/useTodoStorage';
import LocalStoragePersistenceAdapter from "./services/localStoragePersistenceAdapter";
import { PersistenceServices } from './application/persistanceService';
import idGeneratorAdapter from './services/idGeneratorAdapter';
function App() {

  const [isAdding, setAdding] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const persistence = new LocalStoragePersistenceAdapter() as PersistenceServices;
  const {todos, deleteTodo, addTodo} = useTodoStorageService(persistence, idGeneratorAdapter);
  
    useEffect(() => {
    const hasOpenedBefore = persistence.get('hasOpenedBefore');
    if (!hasOpenedBefore) {      
      addTodo({text:'this is a welcome todo'});
      persistence.set('hasOpenedBefore', 'true');
    }
    
  }, []);

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
    addTodo({text:newTodo});
    setAdding(false);
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
        {todos.map(todo => (
          <li key={todo.id}>
            <button
              style={{WebkitMarginEnd: '8px'}}
              id={todo.id}
              onClick={() => deleteTodo(todo.id)}
            >
              delete 
            </button>
            <span>{todo.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
