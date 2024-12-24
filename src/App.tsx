import { useCallback, useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable"
import Field from "./components/Field"
import ReplayButton from "./components/ReplayButton"
import { useField } from "./hooks/useField"

const App = () => {
	const [isCooldown, setIsCooldown] = useState<boolean>(false)
	const {
		field,
		isGameClear,
		isGameOver,
		reset,
		moveDown,
		moveLeft,
		moveRight,
		moveUp,
	} = useField()

	const move = useCallback(
		(direction: "up" | "right" | "down" | "left") => {
			if (isCooldown) return
			setIsCooldown(true)
			switch (direction) {
				case "up":
					moveUp()
					break
				case "right":
					moveRight()
					break
				case "down":
					moveDown()
					break
				case "left":
					moveLeft()
					break
			}
			setTimeout(() => setIsCooldown(false), 300)
		},
		[isCooldown, moveDown, moveLeft, moveRight, moveUp],
	)

	const handleClickReplay = useCallback(() => {
		reset()
	}, [reset])

	const handleSwipe = useSwipeable({
		onSwipedUp: () => move("up"),
		onSwipedRight: () => move("right"),
		onSwipedDown: () => move("down"),
		onSwipedLeft: () => move("left"),
		delta: 100,
	})

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			switch (e.key) {
				case "ArrowUp":
				case "w":
					move("up")
					break
				case "ArrowLeft":
				case "a":
					move("left")
					break
				case "ArrowDown":
				case "s":
					move("down")
					break
				case "ArrowRight":
				case "d":
					move("right")
					break
			}
		},
		[move],
	)

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown)
		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [handleKeyDown])

	return (
		<div
			className="flex h-screen w-screen items-center justify-center bg-[#f9f8f0]"
			{...handleSwipe}
		>
			<div className="mx-4 max-w-[700px]">
				<h1 className="mb-4 text-center font-bold text-6xl text-[#887f73]">
					2048 Puzzle Game
				</h1>
				{isGameOver && (
					<p className="mb-4 text-center font-bold text-5xl text-red-600">
						GAME OVER
					</p>
				)}
				{isGameClear && (
					<p className="mb-4 text-center font-bold text-5xl text-green-600">
						GAME CLEAR
					</p>
				)}
				<Field field={field} />
				<p className="mt-2 text-center text-2xl text-[#887f73]">
					【操作方法】
					<br />
					WASD / 矢印キー / スワイプ
				</p>
				{(isGameClear || isGameOver) && (
					<div className="mx-auto mt-8 w-fit">
						<ReplayButton onClick={handleClickReplay} />
					</div>
				)}
			</div>
		</div>
	)
}

export default App
