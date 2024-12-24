import { cn } from "../utils"

type Props = {
	className?: string
	value: number
}

const Block = ({ className, value }: Props) => {
	const bgColor = [
		"bg-[#cdc1b4]", // 0
		"bg-[#ece4db]", // 2
		"bg-[#e7d9b8]", // 4
		"bg-[#e4b177]", // 8
		"bg-[#e39560]", // 16
		"bg-[#e07f5d]", // 32
		"bg-[#de683e]", // 64
		"bg-[#eacf5f]", // 128
		"bg-[#ebcc55]", // 256
		"bg-[#edc850]", // 512
		"bg-[#f0c535]", // 1024
		"bg-[#f2b922]", // 2048
	]
	const textColor = value <= 2 ? "text-[#716553]" : "text-white"

	return (
		<div
			className={cn(
				"p-1 transition-all duration-300",
				{ "z-10": value > 0 },
				className,
			)}
		>
			<div
				className={cn(
					"flex h-full w-full items-center justify-center rounded-lg font-bold text-5xl",
					"transition-all duration-300",
					bgColor[value],
					textColor,
				)}
			>
				{value > 0 ? 2 ** value : ""}
			</div>
		</div>
	)
}

export default Block
