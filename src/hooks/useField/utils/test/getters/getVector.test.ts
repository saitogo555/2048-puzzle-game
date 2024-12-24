import { getVector } from "../../getters"

describe("getVector", () => {
	test("directionがupの場合、{ x: 0, y: -1 }が返る", () => {
		expect(getVector("up")).toStrictEqual({ x: 0, y: -1 })
	})

	test("directionがdownの場合、{ x: 0, y: 1 }が返る", () => {
		expect(getVector("down")).toStrictEqual({ x: 0, y: 1 })
	})

	test("directionがleftの場合、{ x: -1, y: 0 }が返る", () => {
		expect(getVector("left")).toStrictEqual({ x: -1, y: 0 })
	})

	test("directionがrightの場合、{ x: 1, y: 0 }が返る", () => {
		expect(getVector("right")).toStrictEqual({ x: 1, y: 0 })
	})

	test("不正なdirectionの場合、エラーがthrowされる", () => {
		// @ts-expect-error: 無効な入力のテストのためエラーを無視
		expect(() => getVector("invalid")).toThrow("Invalid direction")
	})
})
