export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'add':
			return [...state, action.payload];
		//ya no va el break por q no necesito ver las otras condicionales	
		//siempre el default ya q se llama cuando se inicializa
		case 'delete':
			//el filter devuelve un nuevo array no muta
			return state.filter(todo => todo.id !== action.payload);
		case 'toogle':
		//con el ternario hacemos un return implicito ya q siempre retorna algo
			return state.map(todo => 
				(todo.id === action.payload)
					? { ...todo, done: !todo.done }
					: todo
			);
		default:
			return state;
	}
}