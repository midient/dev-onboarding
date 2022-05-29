import { useEffect, useState } from "react";
import { idGeneratorService } from "../application/idGeneratorService";
import { IntroductionService } from "../application/introductionService";
import { PersistenceServices } from "../application/persistanceService";
import { TodoStorageService } from "../application/todoStorageService";
import { Todo } from "../domain/Todo";

export function useIntroductionService(persistence: PersistenceServices, todoStorage: TodoStorageService){
    const {addTodo, todos} = todoStorage;
    useEffect(() => {
        checkHasOpenedBefore()
    }, [])

    const checkHasOpenedBefore = async (): Promise<void> => {
        let res = await persistence.get("hasOpenedBefore")
        if (res === null) {
            await persistence.set("hasOpenedBefore", "true")
            addTodo({text: "Welcome to todo-app"})
        }
    }

    return {addTodo, todos}
}
