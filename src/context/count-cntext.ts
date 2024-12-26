import { createContext, useContext } from 'react'

export type CounterState = {
	count: number
	increment: () => void
	decrement: () => void
	reset: () => void
}

export const CounterContext = createContext<CounterState | null>(null)

export const useCounter = () => {
	const context = useContext(CounterContext)

	if (!context) {
		throw new Error('useCounter must be used within a CounterProvider')
	}

	return context
}
