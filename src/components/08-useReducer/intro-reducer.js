const initialState = [{
	id: 1,
	todo: 'Comprar pan',
	done: false,
}];

//siempre tiene q retornar un state
//no usar push ya q modifica el state
const todoReducer = (state = initialState, action) => {
	if (action?.type === 'agregar') {
		//no modifico el state inicial solo devuelvo agregando el nuevo
		// solo debe resolver con los argumentos q le mando el state y action
		return [...state, action.payload];
	}
	return state;
}

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: 'Comprar leche',
	done: false,
}

//es un estandar que tenga el campo type q tipo de accion es
// es un estandra que se llame payload
const agregarTodoAction = {
	type: 'agregar',
	payload: newTodo,
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);