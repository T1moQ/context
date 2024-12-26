import { FC } from 'react'
import { useCounter } from '../context/count-cntext'

export const CounterControls: FC = () => {
	const { increment, decrement } = useCounter()
	return (
		<div className="flex gap-4 mt-10">
			<button
				onClick={increment}
				className="bg-green-100 px-3 py-2 rounded-lg border border-green-500 text-[18px] text-gray-600 cursor-pointer"
			>
				Increment
			</button>
			<button
				onClick={decrement}
				className="bg-blue-100 px-3 py-2 rounded-lg border border-blue-500 text-[18px] text-gray-600 cursor-pointer"
			>
				Decrement
			</button>
		</div>
	)
}
