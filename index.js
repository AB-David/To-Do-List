function App() {
	const [todos, setTodos] = React.useState([
		{
			text: "≡ Code in React",
			isCompleted: false,
		},
		{
			text: "≡ Rinse",
			isCompleted: false,
		},
		{
			text: "≡ Repeat",
			isCompleted: false,
		},
	]);
//Add items
	const addTodo = (text) => {
		const newTodos = [...todos, { text, isCompleted: false }];
		setTodos(newTodos);
	};
//Remove items
	const removeTodo = (index) => {
		let temp = [...todos];
		temp.splice(index, 1);
		setTodos(temp);
	};
	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, i) => (
					<Todo key={i} index={i} todo={todo} remove={removeTodo} />
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
