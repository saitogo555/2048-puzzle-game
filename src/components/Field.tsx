import { FIELD_SIZE } from "../hooks/useField/constants"
import type { Field as FieldType } from "../types/field"
import { cn } from "../utils"
import Block from "./Block"

type Props = {
	field: FieldType
}

const Field = ({ field }: Props) => {
	const translateXClasses = [
		"translate-x-0",
		"translate-x-[100%]",
		"translate-x-[200%]",
		"translate-x-[300%]",
	]

	const translateYClasses = [
		"translate-y-0",
		"translate-y-[100%]",
		"translate-y-[200%]",
		"translate-y-[300%]",
	]

	return (
		<div className="relative h-[32rem] w-[32rem] rounded-lg border-[#988b7c] border-[0.25rem] bg-[#988b7c]">
			{field.flat().map((_, i) => (
				<Block
					className={cn(
						"absolute h-1/4 w-1/4",
						translateXClasses[i % FIELD_SIZE],
						translateYClasses[Math.floor(i / FIELD_SIZE)],
						"transform",
					)}
					key={`bg-${i.toString()}`}
					value={0}
				/>
			))}
			{field.flat().map((block, i) => (
				<Block
					className={cn(
						"absolute h-1/4 w-1/4",
						translateXClasses[i % FIELD_SIZE],
						translateYClasses[Math.floor(i / FIELD_SIZE)],
					)}
					key={`block-${block.id}`}
					value={block.value}
				/>
			))}
		</div>
	)
}

export default Field
