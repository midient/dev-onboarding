import { Todo } from "../domain/Todo"

export type getService = () => Promise<string>
export type setService = (key: string) => void
export type deleteAllService = () => void

export interface PersistenceServices {
    get(key: string): Promise<string | null>
    getAll(): Promise<unknown>
    set(key: string, value: string): Promise<unknown>
    deleteAll(): Promise<unknown>
}