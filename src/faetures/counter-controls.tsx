import { FC } from 'react'

export const CounterControls: FC = () => {
	return (
		<div className="flex gap-4 ">
			<button className="bg-green-100 px-3 py-2 rounded-lg border border-green-500 text-[18px] text-gray-600 cursor-pointer">
				Increment
			</button>
			<button className="bg-blue-100 px-3 py-2 rounded-lg border border-blue-500 text-[18px] text-gray-600 cursor-pointer">
				Decrement
			</button>
		</div>
	)
}
