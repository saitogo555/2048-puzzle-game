import { getXRange } from "../../getters"

describe("getXRange", () => {
	test("directionがupの場合、{ start: 0, end: 4, step: 1 }が返る", () => {
		expect(getXRange("up")).toStrictEqual({ start: 0, end: 4, step: 1 })
	})

	test("directionがdownの場合、{ start: 0, end: 4, step: 1 }が返る", () => {
		expect(getXRange("down")).toStrictEqual({ start: 0, end: 4, step: 1 })
	})

	test("directionがleftの場合、{ start: 0, end: 4, step: 1 }が返る", () => {
		expect(getXRange("left")).toStrictEqual({ start: 0, end: 4, step: 1 })
	})

	test("directionがrightの場合、{ start: 3, end: -1, step: -1 }が返る", () => {
		expect(getXRange("right")).toStrictEqual({ start: 3, end: -1, step: -1 })
	})

	test("不正なdirectionの場合、エラーがthrowされる", () => {
		// @ts-expect-error: 無効な入力のテストのためエラーを無視
		expect(() => getXRange("invalid")).toThrow("Invalid direction")
	})
})
