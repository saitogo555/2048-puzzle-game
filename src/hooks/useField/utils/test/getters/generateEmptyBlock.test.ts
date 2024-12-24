import { generateEmptyBlock } from "../../getters"

describe("generateEmptyBlock", () => {
	test("空のブロックが生成される", () => {
		const block = generateEmptyBlock()
		expect(block).toStrictEqual({ id: expect.any(Number), value: 0 })
	})

	test("ブロックのidがインクリメントされる", () => {
		const block1 = generateEmptyBlock()
		const block2 = generateEmptyBlock()
		expect(block2.id).toBe(block1.id + 1)
	})
})
