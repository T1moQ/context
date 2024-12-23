import { FC } from 'react'
import { InnerComponent } from './inner-component'

export const Container: FC = () => {
	return (
		<div className="w-[1200px] h-[1200px] border border-black bg-white p-6 flex flex-col items-center">
			<h2 className="text-3xl">This is container component</h2>

			<InnerComponent />
		</div>
	)
}
