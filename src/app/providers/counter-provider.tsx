import { FC, PropsWithChildren, useState } from 'react'
import { CounterContext } from '../../context/count-cntext'

export const CounterProvider: FC<PropsWithChildren> = ({ children }) => {
	const [count, setCount] = useState(0)

	const increment = () => setCount((prev) => prev + 1)
	const decrement = () => setCount((prev) => prev - 1)
	const reset = () => setCount(0)

	return (
		<CounterContext.Provider value={{ count, increment, decrement, reset }}>
			<div className="flex flex-col items-center">{children}</div>
		</CounterContext.Provider>
	)
}
