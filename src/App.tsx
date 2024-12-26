import './App.css'
import { CounterProvider } from './app/providers/counter-provider'
import { Container } from './comps/container'
import { ResetCounter } from './faetures/reset-counter'

function App() {
	return (
		<CounterProvider>
			<div className="flex flex-col items-center gap-10 ">
				<h1 className="text-5xl italic font-bold text-center mt-16">
					This is root component
				</h1>
				<Container />
			</div>

			<ResetCounter />
		</CounterProvider>
	)
}

export default App
