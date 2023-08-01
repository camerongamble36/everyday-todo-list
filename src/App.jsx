import './App.css';
import ToDoList from './components/ToDoList';

function App() {
	return (
		<div className="App">
			<header className="header">
				<h1>Everyday Todo List</h1>
			</header>
			<main className="container">
				<ToDoList />
			</main>
		</div>
	);
}

export default App;
