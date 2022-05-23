import { Todo } from "../domain/Todo"

export type getService = () => Promise<string>
export type setService = (key: string) => void
export type deleteAllService = () => void

export interface LocalStoragePersistenceServices {
    get(key: string): Promise<string>
    getAll(): Promise<Array<Todo>>
    set(key: string, value: string): Promise<void>
    deleteAll(): Promise<void>
}