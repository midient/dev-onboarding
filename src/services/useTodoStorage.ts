import { PersistenceServices } from "../application/persistanceService";
import { idGeneratorService } from "../application/idGeneratorService";
import { TodoStorageService } from "../application/todoStorageService";
import { Todo } from "../domain/Todo";
import { useEffect, useState } from "react";

export function useTodoStorageService(persistence: PersistenceServices, idGen: idGeneratorService):TodoStorageService {
    const [todos, setTodos] = useState(Array<Todo>());
    
    const getTodoIndex = (key: string): number => {
        let todoIndex = -1;
        todos.forEach((todo, index) => {
            todoIndex = todo.id === key ? index : -1
        })
        return todoIndex;
    }
    
    useEffect(() =>{ 
        loadTodos()
    }, [])


    const addTodo = async (todo: {text: string}): Promise<void> => {
        //loadTodos()
        const newTodo = {id: idGen(), text: todo.text} as Todo
        const newTodos = [...todos, newTodo]
        setTodos(newTodos);
        //console.log(todos)
        await persistence.set("todos", JSON.stringify(newTodos))
    }

    const deleteTodo = async (key: string) => {
        const tempTodos = todos;
        const todoIndex = getTodoIndex(key)
        tempTodos.splice(todoIndex)
        setTodos(tempTodos);
        await persistence.set("todos", JSON.stringify(tempTodos))

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