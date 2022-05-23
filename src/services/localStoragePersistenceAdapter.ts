
import { LocalStoragePersistenceServices } from "../application/persistanceService";
import { Todo } from "../domain/Todo";

export default class LocalStoragePersistanceAdapter implements LocalStoragePersistanceAdapter {
    get(key: string) {
        return new Promise((resolve, reject) => {
            const result = localStorage.getItem(key);
            resolve(result)
        })
    }
    
    set(key: string, value: string){
        localStorage.setItem(key, value);
    }
    
    deleteAll(){
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
