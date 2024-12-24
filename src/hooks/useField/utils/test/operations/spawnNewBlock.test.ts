import type { MockInstance } from "vitest"
import type { Field } from "../../../../../types/field"
import { FIELD_SIZE } from "../../../constants"
import { spawnNewBlock } from "../../operations"

describe("spawnNewBlock", () => {
	const baseField: Field = Array.from({ length: FIELD_SIZE }, (_, y) => {
		return Array.from({ length: FIELD_SIZE }, (_, x) => ({
			id: y * FIELD_SIZE + x,
			value: 0,
		}))
	})
	let mockRandom: MockInstance<() => number>

	beforeEach(() => {
		mockRandom = vi.spyOn(Math, "random")
	})

	afterEach(() => {
		mockRandom.mockRestore()
	})

	test("空のフィールドで乱数が0の場合、(0, 0)に新しいブロックが生成される", () => {
		mockRandom.mockReturnValue(0)
		const field = spawnNewBlock(baseField)
		const formattedField = field.map((row) => row.map((block) => block.value))
		expect(formattedField).toStrictEqual([
			[1, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		])
	})

	test("空のフィールドで乱数が0.25の場合、(0, 1)に新しいブロックが生成される", () => {
		mockRandom.mockReturnValue(0.25)
		const field = spawnNewBlock(baseField)
		const formattedField = field.map((row) => row.map((block) => block.value))
		expect(formattedField).toStrictEqual([
			[0, 0, 0, 0],
			[1, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		])
	})

	test("空のフィールドで乱数が0.75の場合、(0, 3)に新しいブロックが生成される", () => {
		mockRandom.mockReturnValue(0.75)
		const field = spawnNewBlock(baseField)
		const formattedField = field.map((row) => row.map((block) => block.value))
		expect(formattedField).toStrictEqual([
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 0, 0, 0],
		])
	})

	test("空のフィールドで乱数が0.99の場合、(3, 3)に新しいブロックが生成される", () => {
		mockRandom.mockReturnValue(0.99)
		const field = spawnNewBlock(baseField)
		const formattedField = field.map((row) => row.map((block) => block.value))
		expect(formattedField).toStrictEqual([
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 1],
		])
	})

	test("一部のみ空いているフィールドの場合、空いている位置にのみブロックが生成される", () => {
		const filledField = structuredClone(baseField)
		for (let y = 0; y < FIELD_SIZE; y++) {
			for (let x = 0; x < FIELD_SIZE; x++) {
				if (y !== 2 || x !== 2) {
					filledField[y][x].value = 1
				}
			}
		}
		mockRandom.mockReturnValue(0)
		const field = spawnNewBlock(filledField)
		const formattedField = field.map((row) => row.map((block) => block.value))
		expect(formattedField).toStrictEqual([
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
		])
	})

	test("フィールドが全て埋まっている場合、フィールドは変化しない", () => {
		const filledField = structuredClone(baseField)
		for (let y = 0; y < FIELD_SIZE; y++) {
			for (let x = 0; x < FIELD_SIZE; x++) {
				filledField[y][x].value = 1
			}
		}
		const field = spawnNewBlock(filledField)
		const formattedField = field.map((row) => row.map((block) => block.value))
		expect(formattedField).toStrictEqual([
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
		])
	})
})
