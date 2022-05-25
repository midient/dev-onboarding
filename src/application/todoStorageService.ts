import React from "react";
import { Todo } from "../domain/Todo";

export interface TodoStorageService {
    todos: Array<Todo>;
    addTodo: (todo: {text: string}) => Promise<void>
    deleteTodo: (id: string) => Promise<void>
}