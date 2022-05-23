import idGeneratorAdapter from "../idGeneratorAdapter";

describe("ID generator", () => {
    test('should return string when called', () => {
        const id = idGeneratorAdapter();
        expect(id).toBeDefined();
        expect(typeof id).toBe("string")
    });

    test('should return different string in subsequent calls', () => {
        const id1 = idGeneratorAdapter();
        const id2 = idGeneratorAdapter();

        expect(id1).not.toBe(id2)
    });
})

export {}