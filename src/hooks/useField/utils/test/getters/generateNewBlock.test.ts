import { generateNewBlock } from "../../getters"

describe("generateNewBlock", () => {
	test("新しいブロックが生成される", () => {
		const block = generateNewBlock()
		expect(block).toStrictEqual({ id: expect.any(Number), value: 1 })
	})

	test("ブロックのidがインクリメントされる", () => {
		const block1 = generateNewBlock()
		const block2 = generateNewBlock()
		expect(block2.id).toBe(block1.id + 1)
	})
})
