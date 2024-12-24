import { cn } from "../utils"

type Props = {
	onClick: () => void
}

const ReplayButton = ({ onClick }: Props) => {
	return (
		<button
			className={cn(
				"rounded-full bg-amber-500 px-16 py-4 font-bold text-3xl text-white",
			)}
			type="button"
			onClick={onClick}
		>
			Replay
		</button>
	)
}

export default ReplayButton
