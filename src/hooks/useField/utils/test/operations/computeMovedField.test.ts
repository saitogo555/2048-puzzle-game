import type { Field } from "../../../../../types/field"
import { FIELD_SIZE } from "../../../constants"
import { computeMovedField } from "../../operations"

describe("computeMovedField", () => {
	const baseField: Field = Array.from({ length: FIELD_SIZE }, (_, y) => {
		return Array.from({ length: FIELD_SIZE }, (_, x) => ({
			id: y * FIELD_SIZE + x,
			value: 0,
		}))
	})

	describe("(2, 1)と(1, 2)にブロックがある場合", () => {
		const testField = structuredClone(baseField)
		testField[1][2].value = 1
		testField[2][1].value = 1

		test("directionがupの場合、ブロックが(2, 0)と(1, 0)に移動する", () => {
			const field = computeMovedField(testField, "up")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[0, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがdownの場合、ブロックが(2, 3)と(1, 3)に移動する", () => {
			const field = computeMovedField(testField, "down")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 1, 1, 0],
			])
		})

		test("directionがleftの場合、ブロックが(0, 1)と(0, 2)に移動する", () => {
			const field = computeMovedField(testField, "left")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがrightの場合、ブロックが(3, 1)と(3, 2)に移動する", () => {
			const field = computeMovedField(testField, "right")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 1],
				[0, 0, 0, 1],
				[0, 0, 0, 0],
			])
		})

		test("directionがup -> rightの場合、ブロックが(3, 0)と(2, 0)に移動する", () => {
			const upField = computeMovedField(testField, "up")
			const upRightField = computeMovedField(upField, "right")
			const formattedField = upRightField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがup -> leftの場合、ブロックが(0, 1)と(0, 0)に移動する", () => {
			const upField = computeMovedField(testField, "up")
			const upLeftField = computeMovedField(upField, "left")
			const formattedField = upLeftField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[1, 1, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがup -> downの場合、ブロックが(2, 3)と(1, 3)に移動する", () => {
			const upField = computeMovedField(testField, "up")
			const upDownField = computeMovedField(upField, "down")
			const formattedField = upDownField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 1, 1, 0],
			])
		})

		test("directionがdown -> rightの場合、ブロックが(3, 3)と(2, 3)に移動する", () => {
			const downField = computeMovedField(testField, "down")
			const downRightField = computeMovedField(downField, "right")
			const formattedField = downRightField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 1, 1],
			])
		})

		test("directionがdown -> leftの場合、ブロックが(1, 3)と(0, 3)に移動する", () => {
			const downField = computeMovedField(testField, "down")
			const downLeftField = computeMovedField(downField, "left")
			const formattedField = downLeftField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 1, 0, 0],
			])
		})

		test("directionがdown -> upの場合、ブロックが(2, 0)と(1, 0)に移動する", () => {
			const downField = computeMovedField(testField, "down")
			const downUpField = computeMovedField(downField, "up")
			const formattedField = downUpField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがleft -> upの場合、ブロックが(0, 0)と(0, 1)に移動する", () => {
			const leftField = computeMovedField(testField, "left")
			const leftUpField = computeMovedField(leftField, "up")
			const formattedField = leftUpField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがleft -> downの場合、ブロックが(0, 2)と(0, 3)に移動する", () => {
			const leftField = computeMovedField(testField, "left")
			const leftDownField = computeMovedField(leftField, "down")
			const formattedField = leftDownField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
			])
		})

		test("directionがleft -> rightの場合、ブロックが(3, 1)と(3, 2)に移動する", () => {
			const leftField = computeMovedField(testField, "left")
			const leftRightField = computeMovedField(leftField, "right")
			const formattedField = leftRightField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 1],
				[0, 0, 0, 1],
				[0, 0, 0, 0],
			])
		})

		test("directionがright -> upの場合、ブロックが(3, 0)と(3, 1)に移動する", () => {
			const rightField = computeMovedField(testField, "right")
			const rightUpField = computeMovedField(rightField, "up")
			const formattedField = rightUpField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 1],
				[0, 0, 0, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがright -> downの場合、ブロックが(3, 1)と(3, 2)に移動する", () => {
			const rightField = computeMovedField(testField, "right")
			const rightDownField = computeMovedField(rightField, "down")
			const formattedField = rightDownField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 1],
				[0, 0, 0, 1],
			])
		})

		test("directionがright -> leftの場合、ブロックが(0, 1)と(0, 2)に移動する", () => {
			const rightField = computeMovedField(testField, "right")
			const rightLeftField = computeMovedField(rightField, "left")
			const formattedField = rightLeftField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})
	})

	describe("(0, 0)と(3, 3)にブロックがある場合", () => {
		const testField = structuredClone(baseField)
		testField[0][0].value = 1
		testField[3][3].value = 1

		test("directionがupの場合、ブロックが(0, 0)と(3, 0)に移動する", () => {
			const field = computeMovedField(testField, "up")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[1, 0, 0, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがdownの場合、ブロックが(0, 3)と(3, 3)に移動する", () => {
			const field = computeMovedField(testField, "down")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 0, 0, 1],
			])
		})

		test("directionがleftの場合、ブロックが(0, 0)と(0, 3)に移動する", () => {
			const field = computeMovedField(testField, "left")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[1, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 0, 0, 0],
			])
		})

		test("directionがrightの場合、ブロックが(3, 0)と(3, 3)に移動する", () => {
			const field = computeMovedField(testField, "right")
			const formattedField = field.map((row) => row.map((block) => block.value))
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 1],
			])
		})

		test("directionがup -> rightの場合、ブロックが(2, 0)と(3, 0)に移動する", () => {
			const upField = computeMovedField(testField, "up")
			const upRightField = computeMovedField(upField, "right")
			const formattedField = upRightField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがup -> leftの場合、ブロックが(0, 0)と(1, 0)に移動する", () => {
			const upField = computeMovedField(testField, "up")
			const upLeftField = computeMovedField(upField, "left")
			const formattedField = upLeftField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[1, 1, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがup -> downの場合、ブロックが(0, 3)と(3, 3)に移動する", () => {
			const upField = computeMovedField(testField, "up")
			const upDownField = computeMovedField(upField, "down")
			const formattedField = upDownField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 0, 0, 1],
			])
		})

		test("directionがdown -> rightの場合、ブロックが(3, 3)と(2, 3)に移動する", () => {
			const downField = computeMovedField(testField, "down")
			const downRightField = computeMovedField(downField, "right")
			const formattedField = downRightField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 1, 1],
			])
		})

		test("directionがdown -> leftの場合、ブロックが(1, 3)と(0, 3)に移動する", () => {
			const downField = computeMovedField(testField, "down")
			const downLeftField = computeMovedField(downField, "left")
			const formattedField = downLeftField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 1, 0, 0],
			])
		})

		test("directionがdown -> upの場合、ブロックが(0, 0)と(3, 0)に移動する", () => {
			const downField = computeMovedField(testField, "down")
			const downUpField = computeMovedField(downField, "up")
			const formattedField = downUpField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[1, 0, 0, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがleft -> upの場合、ブロックが(0, 0)と(0, 1)に移動する", () => {
			const leftField = computeMovedField(testField, "left")
			const leftUpField = computeMovedField(leftField, "up")
			const formattedField = leftUpField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがleft -> downの場合、ブロックが(0, 2)と(0, 3)に移動する", () => {
			const leftField = computeMovedField(testField, "left")
			const leftDownField = computeMovedField(leftField, "down")
			const formattedField = leftDownField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
			])
		})

		test("directionがleft -> rightの場合、ブロックが(3, 0)と(3, 3)に移動する", () => {
			const leftField = computeMovedField(testField, "left")
			const leftRightField = computeMovedField(leftField, "right")
			const formattedField = leftRightField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 1],
			])
		})

		test("directionがright -> upの場合、ブロックが(3, 0)と(3, 1)に移動する", () => {
			const rightField = computeMovedField(testField, "right")
			const rightUpField = computeMovedField(rightField, "up")
			const formattedField = rightUpField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 1],
				[0, 0, 0, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			])
		})

		test("directionがright -> downの場合、ブロックが(3, 2)と(3, 3)に移動する", () => {
			const rightField = computeMovedField(testField, "right")
			const rightDownField = computeMovedField(rightField, "down")
			const formattedField = rightDownField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 1],
				[0, 0, 0, 1],
			])
		})

		test("directionがright -> leftの場合、ブロックが(0, 0)と(0, 3)に移動する", () => {
			const rightField = computeMovedField(testField, "right")
			const rightLeftField = computeMovedField(rightField, "left")
			const formattedField = rightLeftField.map((row) =>
				row.map((block) => block.value),
			)
			expect(formattedField).toStrictEqual([
				[1, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 0, 0, 0],
			])
		})
	})

	test("ブロックが存在しない場合、フィールドは変化しない", () => {
		const testField = structuredClone(baseField)
		const movedField = computeMovedField(testField, "up")
		const formattedField = movedField.map((row) =>
			row.map((block) => block.value),
		)
		expect(formattedField).toStrictEqual([
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		])
	})
})
