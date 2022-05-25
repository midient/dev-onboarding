import { act, renderHook } from "@testing-library/react-hooks";
import { PersistenceServices } from "../../application/persistanceService";
import LocalStoragePersistenceAdapter from "../localStoragePersistenceAdapter"
import { useTodoStorageService } from "../useTodoStorage";
const persistence = new LocalStoragePersistenceAdapter() as PersistenceServices;
const idGen = () => 'mock-id';

describe('Todo Storage Adapter', () => {
  beforeEach(async () => {
    await persistence.deleteAll();
  });

  test('provides todos in the local state', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useTodoStorageService(persistence, idGen));
    await waitForNextUpdate();

    expect(result.current.todos).toStrictEqual([]);
  });

  test('loads todos from persistence into local state upon initializing', async () => {
    await persistence.set('todos', JSON.stringify([{id: '1', text: 'todo1'}, {id: '2', text: 'todo2'}]));

    const {result, waitForNextUpdate} = renderHook(() => useTodoStorageService(persistence, idGen));
    await waitForNextUpdate();

    expect(result.current.todos).toStrictEqual([{id: '1', text: 'todo1'}, {id: '2', text: 'todo2'}]);
  });

  test('creates todos with automatically added ids and persistence', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useTodoStorageService(persistence, idGen));
    await waitForNextUpdate();
    
    act(() => {
      result.current.addTodo({text: 'sample todo'});
    });
    
    expect(result.current.todos).toStrictEqual([{id: 'mock-id', text: 'sample todo'}]);
    await expect(persistence.get('todos')).resolves.toBe(JSON.stringify([{id: 'mock-id', text: 'sample todo'}]));
  });

  test('deletes todos by id', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useTodoStorageService(persistence, idGen));
    await waitForNextUpdate();
    act(() => {
      result.current.addTodo({text: 'sample todo'});
    });

    act(() => {
      result.current.deleteTodo('mock-id');
    });

    expect(result.current.todos).toStrictEqual([]);
    await expect(persistence.get('todos')).resolves.toBe(JSON.stringify([]));
  });
});
