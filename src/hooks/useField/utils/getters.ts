import type { Block, Field } from "../../../types/field"
import { FIELD_SIZE } from "../constants"
import type { Direction, ForRange, Vector } from "../types"

// ブロックのID
let cntId = 0

// ベクトルを取得(ブロックの移動方向)
export const getVector = (direction: Direction): Vector => {
	switch (direction) {
		case "up":
			return { x: 0, y: -1 }
		case "down":
			return { x: 0, y: 1 }
		case "left":
			return { x: -1, y: 0 }
		case "right":
			return { x: 1, y: 0 }
		default:
			throw new Error("Invalid direction")
	}
}

// X方向のループ範囲を取得
export const getXRange = (direction: Direction): ForRange => {
	switch (direction) {
		case "up":
		case "down":
		case "left":
			return { start: 0, end: FIELD_SIZE, step: 1 }
		case "right":
			return { start: FIELD_SIZE - 1, end: -1, step: -1 }
		default:
			throw new Error("Invalid direction")
	}
}

// Y方向のループ範囲を取得
export const getYRange = (direction: Direction): ForRange => {
	switch (direction) {
		case "up":
		case "left":
		case "right":
			return { start: 0, end: FIELD_SIZE, step: 1 }
		case "down":
			return { start: FIELD_SIZE - 1, end: -1, step: -1 }
		default:
			throw new Error("Invalid direction")
	}
}

// 空のフィールドを生成
export const generateEmptyField = (): Field => {
	const field = Array.from({ length: FIELD_SIZE }, () =>
		Array.from({ length: FIELD_SIZE }, () => ({
			id: cntId++,
			value: 0,
		})),
	)
	return field
}

// 空のブロックを生成
export const generateEmptyBlock = (): Block => {
	return { id: cntId++, value: 0 }
}

// 新しいブロックの生成
export const generateNewBlock = (): Block => {
	return { id: cntId++, value: 1 }
}
