import { generateEmptyField } from "../../getters"

describe("generateEmptyField", () => {
	test("4x4の空のフィールドが生成される", () => {
		const field = generateEmptyField()
		expect(field).toHaveLength(4)
		for (const row of field) {
			expect(row).toHaveLength(4)
			for (const block of row) {
				expect(block).toStrictEqual({ id: expect.any(Number), value: 0 })
			}
		}
	})
})
