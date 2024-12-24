import { useState } from "react"
import type { Field } from "../../types/field"
import { generateEmptyField } from "./utils/getters"
import {
	computeMergedField,
	computeMovedField,
	spawnNewBlock,
} from "./utils/operations"
import { isGameClear, isGameOver } from "./utils/validators"

export const useField = () => {
	const [field, setField] = useState<Field>(
		spawnNewBlock(spawnNewBlock(generateEmptyField())),
	)

	// フィールドをリセット
	const reset = (): void => {
		setField(spawnNewBlock(spawnNewBlock(generateEmptyField())))
	}

	// ブロックを上方向に移動
	const moveUp = (): void => {
		const copyField = structuredClone(field)
		const firstMovedField = computeMovedField(copyField, "up")
		const mergedField = computeMergedField(firstMovedField, "up")
		const finalMovedField = computeMovedField(mergedField, "up")
		const newField = spawnNewBlock(finalMovedField)
		setField(newField)
	}

	// ブロックを下方向に移動
	const moveDown = (): void => {
		const copyField = structuredClone(field)
		const firstMovedField = computeMovedField(copyField, "down")
		const mergedField = computeMergedField(firstMovedField, "down")
		const finalMovedField = computeMovedField(mergedField, "down")
		const newField = spawnNewBlock(finalMovedField)
		setField(newField)
	}

	// ブロックを左方向に移動
	const moveLeft = (): void => {
		const copyField = structuredClone(field)
		const firstMovedField = computeMovedField(copyField, "left")
		const mergedField = computeMergedField(firstMovedField, "left")
		const finalMovedField = computeMovedField(mergedField, "left")
		const newField = spawnNewBlock(finalMovedField)
		setField(newField)
	}

	// ブロックを右方向に移動
	const moveRight = (): void => {
		console.log("moveRight")
		const copyField = structuredClone(field)
		const firstMovedField = computeMovedField(copyField, "right")
		const mergedField = computeMergedField(firstMovedField, "right")
		const finalMovedField = computeMovedField(mergedField, "right")
		const newField = spawnNewBlock(finalMovedField)
		setField(newField)
	}

	return {
		field,
		isGameClear: isGameClear(field),
		isGameOver: isGameOver(field),
		reset,
		moveUp,
		moveDown,
		moveLeft,
		moveRight,
	}
}
