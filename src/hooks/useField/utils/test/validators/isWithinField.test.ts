import { isWithinField } from "../../validators"

describe("isWithinField", () => {
	test("有効な座標の場合はtrueを返す", () => {
		expect(isWithinField(0, 0)).toBe(true)
		expect(isWithinField(3, 3)).toBe(true)
		expect(isWithinField(2, 1)).toBe(true)
	})

	test("無効な座標の場合はfalseを返す", () => {
		expect(isWithinField(-1, 0)).toBe(false)
		expect(isWithinField(0, -1)).toBe(false)
		expect(isWithinField(4, 0)).toBe(false)
		expect(isWithinField(0, 4)).toBe(false)
		expect(isWithinField(4, 4)).toBe(false)
	})
})
