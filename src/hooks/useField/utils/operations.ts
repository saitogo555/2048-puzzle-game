import type { Field } from "../../../types/field"
import { FIELD_SIZE } from "../constants"
import type { Direction } from "../types"
import {
	generateEmptyBlock,
	generateEmptyField,
	generateNewBlock,
	getVector,
	getXRange,
	getYRange,
} from "./getters"
import { isWithinField } from "./validators"

// ブロックの移動処理
export const computeMovedField = (
	field: Field,
	direction: Direction,
): Field => {
	const newField = generateEmptyField()
	const vec = getVector(direction)
	const xRange = getXRange(direction)
	const yRange = getYRange(direction)
	for (let y = yRange.start; y !== yRange.end; y += yRange.step) {
		for (let x = xRange.start; x !== xRange.end; x += xRange.step) {
			const targetBlock = field[y][x]
			if (targetBlock.value === 0) continue
			let mx = x
			let my = y
			while (isWithinField(mx + vec.x, my + vec.y)) {
				const destBlock = newField[my + vec.y][mx + vec.x]
				if (destBlock.value !== 0) break
				mx += vec.x
				my += vec.y
			}
			newField[my][mx] = { ...targetBlock }
		}
	}
	return newField
}

// ブロックの結合処理
export const computeMergedField = (
	field: Field,
	direction: Direction,
): Field => {
	const newField = structuredClone(field)
	const vec = getVector(direction)
	const xRange = getXRange(direction)
	const yRange = getYRange(direction)
	for (let y = yRange.start; y !== yRange.end; y += yRange.step) {
		for (let x = xRange.start; x !== xRange.end; x += xRange.step) {
			const targetBlock = newField[y][x]
			if (targetBlock.value === 0) continue

			const mx = x + vec.x
			const my = y + vec.y
			if (!isWithinField(mx, my)) continue

			const destBlock = newField[my][mx]
			if (targetBlock.value !== destBlock.value) continue

			newField[y][x] = generateEmptyBlock()
			newField[my][mx] = { id: targetBlock.id, value: targetBlock.value + 1 }
		}
	}
	return newField
}

// 新しいブロックをランダムな位置に生成
export const spawnNewBlock = (field: Field): Field => {
	const newField = structuredClone(field)
	const emptyBlocks: { x: number; y: number }[] = []
	for (let y = 0; y < FIELD_SIZE; y++) {
		for (let x = 0; x < FIELD_SIZE; x++) {
			if (newField[y][x].value === 0) {
				emptyBlocks.push({ x, y })
			}
		}
	}
	if (emptyBlocks.length === 0) {
		return newField
	}
	const rand = Math.floor(Math.random() * emptyBlocks.length)
	const { x, y } = emptyBlocks[rand]
	newField[y][x] = generateNewBlock()
	return newField
}
