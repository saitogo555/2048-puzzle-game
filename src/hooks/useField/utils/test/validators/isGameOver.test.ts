import type { Field } from "../../../../../types/field"
import { isGameOver } from "../../validators"

describe("isGameOver", () => {
	test("空のブロックが存在する場合はfalseを返す", () => {
		const field: Field = [
			[
				{ id: 0, value: 2 },
				{ id: 1, value: 4 },
				{ id: 2, value: 8 },
				{ id: 3, value: 0 },
			],
			[
				{ id: 4, value: 16 },
				{ id: 5, value: 32 },
				{ id: 6, value: 64 },
				{ id: 7, value: 128 },
			],
			[
				{ id: 8, value: 256 },
				{ id: 9, value: 512 },
				{ id: 10, value: 1024 },
				{ id: 11, value: 2048 },
			],
			[
				{ id: 12, value: 4 },
				{ id: 13, value: 8 },
				{ id: 14, value: 16 },
				{ id: 15, value: 32 },
			],
		]
		expect(isGameOver(field)).toBe(false)
	})

	test("隣接する同じ数値が水平に存在する場合はfalseを返す", () => {
		const field: Field = [
			[
				{ id: 0, value: 2 },
				{ id: 1, value: 2 },
				{ id: 2, value: 8 },
				{ id: 3, value: 4 },
			],
			[
				{ id: 4, value: 16 },
				{ id: 5, value: 32 },
				{ id: 6, value: 64 },
				{ id: 7, value: 128 },
			],
			[
				{ id: 8, value: 256 },
				{ id: 9, value: 512 },
				{ id: 10, value: 1024 },
				{ id: 11, value: 2048 },
			],
			[
				{ id: 12, value: 4 },
				{ id: 13, value: 8 },
				{ id: 14, value: 16 },
				{ id: 15, value: 32 },
			],
		]
		expect(isGameOver(field)).toBe(false)
	})

	test("隣接する同じ数値が垂直に存在する場合はfalseを返す", () => {
		const field: Field = [
			[
				{ id: 0, value: 2 },
				{ id: 1, value: 4 },
				{ id: 2, value: 8 },
				{ id: 3, value: 4 },
			],
			[
				{ id: 4, value: 2 },
				{ id: 5, value: 32 },
				{ id: 6, value: 64 },
				{ id: 7, value: 128 },
			],
			[
				{ id: 8, value: 256 },
				{ id: 9, value: 512 },
				{ id: 10, value: 1024 },
				{ id: 11, value: 2048 },
			],
			[
				{ id: 12, value: 4 },
				{ id: 13, value: 8 },
				{ id: 14, value: 16 },
				{ id: 15, value: 32 },
			],
		]
		expect(isGameOver(field)).toBe(false)
	})

	test("移動可能な手がない場合はtrueを返す", () => {
		const field: Field = [
			[
				{ id: 0, value: 2 },
				{ id: 1, value: 4 },
				{ id: 2, value: 8 },
				{ id: 3, value: 4 },
			],
			[
				{ id: 4, value: 16 },
				{ id: 5, value: 32 },
				{ id: 6, value: 64 },
				{ id: 7, value: 128 },
			],
			[
				{ id: 8, value: 256 },
				{ id: 9, value: 512 },
				{ id: 10, value: 1024 },
				{ id: 11, value: 2048 },
			],
			[
				{ id: 12, value: 4 },
				{ id: 13, value: 8 },
				{ id: 14, value: 16 },
				{ id: 15, value: 32 },
			],
		]
		expect(isGameOver(field)).toBe(true)
	})
})
