import { FC } from 'react'
import { useCounter } from '../context/count-cntext'

export const ResetCounter: FC = () => {
	const { reset } = useCounter()
	return (
		<div>
			<button
				onClick={reset}
				className="bg-red-100 px-3 py-2 rounded-2xl border border-red-500 text-[18px] text-red-800 cursor-pointer mt-10"
			>
				Reset
			</button>
		</div>
	)
}
