// User input - includes validation
function TodoForm({addTodo}){
    // Value is a managed variable
    const [value,setValue] = React.useState('');      
    // The function that will handle the event to add the to-dos
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return; //early return achieved
        addTodo(value);
        setValue('');
        }
    // The form to handle the input via onSubmit
        return (
            <form onSubmit={handleSubmit}>
            <input 
            type="text"
            className="input"         
            value={value} // the value in our state
            placeholder="Add a To-Do item"
            onChange={e => setValue(e.target.value)} />
            </form>
        )
}