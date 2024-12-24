import type { Field } from "../../../../../types/field"
import { FIELD_SIZE } from "../../../constants"
import { computeMergedField } from "../../operations"

describe("computeMergedField", () => {
	const baseField: Field = Array.from({ length: FIELD_SIZE }, (_, y) => {
		return Array.from({ length: FIELD_SIZE }, (_, x) => ({
			id: y * FIELD_SIZE + x,
			value: 0,
		}))
	})

	describe("垂直方向のマージ", () => {
		const verticalField: Field = structuredClone(baseField)
		verticalField[1][1].value = 1
		verticalField[2][1].value = 1

		test("上方向へのマージ", () => {
			const field = computeMergedField(verticalField, "up")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 2, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("下方向へのマージ", () => {
			const field = computeMergedField(verticalField, "down")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 2, 0, 0],
				[0, 0, 0, 0],
			])
		})
	})

	describe("水平方向のマージ", () => {
		const horizontalField: Field = structuredClone(baseField)
		horizontalField[1][1].value = 1
		horizontalField[1][2].value = 1

		test("左方向へのマージ", () => {
			const field = computeMergedField(horizontalField, "left")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 2, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("右方向へのマージ", () => {
			const field = computeMergedField(horizontalField, "right")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 2, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})
	})

	describe("複数のマージ", () => {
		const multipleField: Field = structuredClone(baseField)
		multipleField[0][0].value = 1
		multipleField[0][1].value = 1
		multipleField[2][0].value = 1
		multipleField[2][1].value = 1

		test("左方向へのマージ", () => {
			const field = computeMergedField(multipleField, "left")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[2, 0, 0, 0],
				[0, 0, 0, 0],
				[2, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})
	})
})
