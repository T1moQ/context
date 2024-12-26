import { FC } from 'react'
import { DisplayCount } from '../faetures/display-count'

export const InnerComponent: FC = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-6 mt-32 border border-gray-700 p-4 w-[400px] h-[400px] rounded-xl">
			<h2>This is inner component</h2>
			<DisplayCount />
		</div>
	)
}
