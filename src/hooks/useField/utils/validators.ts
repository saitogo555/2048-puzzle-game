import type { Field } from "../../../types/field"
import { FIELD_SIZE } from "../constants"

// 指定座標がフィールド範囲内であるか判定
export const isWithinField = (x: number, y: number): boolean => {
	return 0 <= x && x < FIELD_SIZE && 0 <= y && y < FIELD_SIZE
}

// ゲームクリア判定
export const isGameClear = (field: Field): boolean => {
	// フィールド内に2048が存在する場合はゲームクリア
	for (let y = 0; y < FIELD_SIZE; y++) {
		for (let x = 0; x < FIELD_SIZE; x++) {
			if (field[y][x].value === 11) return true // 2^11 = 2048
		}
	}
	return false
}

// ゲームオーバー判定
export const isGameOver = (field: Field): boolean => {
	// 空きブロックが存在する場合はゲームオーバーではない
	for (let y = 0; y < FIELD_SIZE; y++) {
		for (let x = 0; x < FIELD_SIZE; x++) {
			if (field[y][x].value === 0) return false
		}
	}

	// 右隣に同じ数字が存在する場合はゲームオーバーではない
	for (let y = 0; y < FIELD_SIZE; y++) {
		for (let x = 0; x < FIELD_SIZE - 1; x++) {
			if (field[y][x].value === field[y][x + 1].value) return false
		}
	}

	// 下隣に同じ数字が存在する場合はゲームオーバーではない
	for (let y = 0; y < FIELD_SIZE - 1; y++) {
		for (let x = 0; x < FIELD_SIZE; x++) {
			if (field[y][x].value === field[y + 1][x].value) return false
		}
	}

	return true
}
