import type { Field } from "../../../../../types/field"
import { isGameClear } from "../../validators"

describe("isGameClear", () => {
	test("フィールドに2048のブロックが存在する場合はtrueを返す", () => {
		const field: Field = [
			[
				{ id: 0, value: 1 },
				{ id: 1, value: 2 },
				{ id: 2, value: 3 },
				{ id: 3, value: 4 },
			],
			[
				{ id: 4, value: 5 },
				{ id: 5, value: 6 },
				{ id: 6, value: 7 },
				{ id: 7, value: 8 },
			],
			[
				{ id: 8, value: 9 },
				{ id: 9, value: 10 },
				{ id: 10, value: 11 },
				{ id: 11, value: 2 },
			],
			[
				{ id: 12, value: 3 },
				{ id: 13, value: 4 },
				{ id: 14, value: 5 },
				{ id: 15, value: 6 },
			],
		]
		expect(isGameClear(field)).toBe(true)
	})

	test("フィールドに2048のブロックが存在しない場合はfalseを返す", () => {
		const field: Field = [
			[
				{ id: 0, value: 1 },
				{ id: 1, value: 2 },
				{ id: 2, value: 3 },
				{ id: 3, value: 4 },
			],
			[
				{ id: 4, value: 5 },
				{ id: 5, value: 6 },
				{ id: 6, value: 7 },
				{ id: 7, value: 8 },
			],
			[
				{ id: 8, value: 9 },
				{ id: 9, value: 10 },
				{ id: 10, value: 1 },
				{ id: 11, value: 2 },
			],
			[
				{ id: 12, value: 3 },
				{ id: 13, value: 4 },
				{ id: 14, value: 5 },
				{ id: 15, value: 6 },
			],
		]
		expect(isGameClear(field)).toBe(false)
	})

	test("フィールドが空の場合はfalseを返す", () => {
		const field: Field = [
			[
				{ id: 0, value: 0 },
				{ id: 1, value: 0 },
				{ id: 2, value: 0 },
				{ id: 3, value: 0 },
			],
			[
				{ id: 4, value: 0 },
				{ id: 5, value: 0 },
				{ id: 6, value: 0 },
				{ id: 7, value: 0 },
			],
			[
				{ id: 8, value: 0 },
				{ id: 9, value: 0 },
				{ id: 10, value: 0 },
				{ id: 11, value: 0 },
			],
			[
				{ id: 12, value: 0 },
				{ id: 13, value: 0 },
				{ id: 14, value: 0 },
				{ id: 15, value: 0 },
			],
		]
		expect(isGameClear(field)).toBe(false)
	})
})
