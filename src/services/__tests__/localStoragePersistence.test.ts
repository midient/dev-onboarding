import { Todo } from "../../domain/Todo";
import LocalStoragePersistanceAdapter from "../localStoragePersistenceAdapter";

describe("Persistence Adapter", () => {

    let lsp: LocalStoragePersistanceAdapter;

    beforeEach(() => {
        localStorage.clear();
        lsp = new LocalStoragePersistanceAdapter();
    })
    
    test('can save a string value associated to a key', async () => {

        await lsp.set("key", "value");

        const returnedValue = await lsp.get("key");
        expect(returnedValue).toBe("value");
    });

    test('returns null for keys with no associated value', async () => {
        const returnedValue = await lsp.get("non existing key");
        expect(returnedValue).toBeNull();
    });

    test('can get back a value by its key', async () => {
        const key = "key";
        const value = "value";
        lsp.set(key, value);
        
        const returnedValue = await lsp.get(key);
        expect(returnedValue).toBe(value);
    });

    test('can delete all values', async () => {
        const key = "key";
        const key1 = "key1";
        await lsp.set(key, "value");
        await lsp.set(key1, "value1");
        
        await lsp.deleteAll();
        
        const returnedValue = await lsp.get(key);
        const returnedValue1 = await lsp.get(key1);
        
        expect(returnedValue).toBeNull()
        expect(returnedValue1).toBeNull()
    });

    //added tests

    test('getAll function should return an array ', async () => {

        await lsp.set("key", "value");
        await lsp.set("key1", "value1");

        const returnedArray = await lsp.getAll() as Array<Todo>
        
        expect(returnedArray.length).toBeDefined()
        expect(returnedArray[0].id).toBe("key")
    });
})
