import './App.css'
import { Container } from './comps/container'

function App() {
	return (
		<div className="flex flex-col items-center gap-10 ">
			<h1 className="text-5xl italic font-bold text-center mt-16">
				This is root component
			</h1>
			<Container />
		</div>
	)
}

export default App
