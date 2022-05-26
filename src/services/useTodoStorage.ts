import { PersistenceServices } from "../application/persistanceService";
import { idGeneratorService } from "../application/idGeneratorService";
import { TodoStorageService } from "../application/todoStorageService";
import { Todo } from "../domain/Todo";
import { useEffect, useState } from "react";

export function useTodoStorageService(persistence: PersistenceServices, idGen: idGeneratorService):TodoStorageService {
    const [todos, setTodos] = useState(Array<Todo>());
    
    const getTodoIndex = (id: string): number => {
        let todo = todos.find(todo => todo.id === id);
        return todo ? todos.indexOf(todo): -1;
    }
    
    useEffect(() =>{ 
        loadTodos()
    }, []);

    const addTodo = async (todo: {text: string}): Promise<void> => {
        const newTodo = {id: idGen(), text: todo.text} as Todo
        const newTodos = [...todos, newTodo]
        setTodos(newTodos);
        await persistence.set("todos", JSON.stringify(newTodos))
    }

    const deleteTodo = async (id: string) => {
        const tempTodos = [...todos];
        const todoIndex = getTodoIndex(id);
        if (todoIndex !== -1) {
            tempTodos.splice(todoIndex, 1)
            setTodos(tempTodos);
            await persistence.set("todos", JSON.stringify(tempTodos));
        }
    }

    const loadTodos = async () => {
        let todosString ;
        await persistence.get("todos").then(result => todosString = result)
        setTodos(JSON.parse(todosString || "[]"));
    }

    return {
        todos,
        deleteTodo,
        addTodo
    } as TodoStorageService
}