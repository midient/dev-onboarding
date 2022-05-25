
import { PersistenceServices } from "../application/persistanceService";
import { Todo } from "../domain/Todo";

export default class LocalStoragePersistanceAdapter implements PersistenceServices {

    async get(key: string): Promise<string | null> {
        return localStorage.getItem(key)
    }

    async set(key: string, value: string): Promise<void> {
        localStorage.setItem(key, value);
    }
    
    async deleteAll(): Promise<void> {
        localStorage.clear();
    }

    // the added function
    getAll() {
        return new Promise((resolve, reject) => {
            const result = new Array<Todo>();
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i) as string;
                const value = localStorage.getItem(key);

                result.push({id: key, text: value} as Todo)
            }
            resolve(result)
        })
    }
}
