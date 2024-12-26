import { FC } from 'react'
import { useCounter } from '../context/count-cntext'

export const DisplayCount: FC = () => {
	const { count } = useCounter()
	return (
		<div className="w-56 h-20 border border-gray-400 rounded-xl flex justify-center items-center text-4xl p-4 ">
			{count}
		</div>
	)
}
