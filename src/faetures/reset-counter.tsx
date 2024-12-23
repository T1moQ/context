import { FC } from 'react'

export const ResetCounter: FC = () => {
	return (
		<div>
			<button className="bg-red-100 px-3 py-2 rounded-2xl border border-red-500 text-[18px] text-red-800 cursor-pointer">
				Reset
			</button>
		</div>
	)
}
