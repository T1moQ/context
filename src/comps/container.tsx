import { FC } from 'react'
import { InnerComponent } from './inner-component'
import { CounterControls } from '../faetures/counter-controls'

export const Container: FC = () => {
	return (
		<div className="w-[800px] h-[800px] border border-black bg-white p-6 flex flex-col items-center">
			<h2 className="text-3xl">This is middle component</h2>

			<InnerComponent />

			<CounterControls />
		</div>
	)
}
