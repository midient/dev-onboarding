import { act, renderHook } from "@testing-library/react-hooks";
import { PersistenceServices } from "../../application/persistanceService";
import LocalStoragePersistenceAdapter from "../localStoragePersistenceAdapter"
import { useIntroductionService } from "../useIntroductionService";
import { useTodoStorageService } from "../useTodoStorage";
const persistence = new LocalStoragePersistenceAdapter() as PersistenceServices;
const idGen = () => 'mock-id';

describe("Introduction Service", () => {
    
    beforeEach(async () => {
        await persistence.deleteAll();
    })

    test('should add hasOpenedBefore on first visit', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useIntroductionService(persistence, useTodoStorageService(persistence, idGen)));
        await waitForNextUpdate();

        const res = JSON.parse(await persistence.get("hasOpenedBefore") || "false");
        expect(res).toBe(true);
    });

    test('should add welcome string as a todo', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useIntroductionService(persistence, useTodoStorageService(persistence, idGen)));
        await waitForNextUpdate();

        expect(result.current.todos).toStrictEqual([{id: "mock-id", text: "Welcome to todo-app"}]);
    });
})

export {}