import { FC } from 'react'

export const Container: FC = () => {
	return (
		<div className="w-[1200px] h-[1200px] border border-black bg-white p-6 flex justify-center">
			<h2 className="text-3xl">This is inner component</h2>
		</div>
	)
}
