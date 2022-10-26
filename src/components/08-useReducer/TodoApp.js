import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
// import { useForm } from '../../hooks/useForm';
import './style.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// const initialState = [{
// 	id: new Date().getTime(),
// 	desc: 'Aprender React',
// 	done: false,
// }];

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

	//initialState -> es un estado inicial
	//init -> es una funcion para inicializar el state en caso sea como procesado o haga varias acciones, ayuda a react a computar estado incial para q no se ejecuta cada rato cuando aya cambios
	//dispatch -> disparar mis acciones hacia mi reducer, es para q react se entere para q vuelva a redibujar en pantalla
	const [ todos, dispatch ] = useReducer(todoReducer, [], init);
	// const [ { description }, handleInputChange, reset] = useForm({
	// 	description: '',
	// });

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	if (description.trim().length <=1) {
	// 		return;
	// 	}
	// 	const newTodo = {
	// 		id: new Date().getTime(),
	// 		desc: description,
	// 		done: false, 
	// 	};

	// 	const action = {
	// 		type: 'add',
	// 		payload: newTodo,
	// 	}

	// 	//dispatch es para disparar la accion

	// 	//se puede enviar como argumentos a otros 
	// 	//componentes hijos y ese dispatch sabe q pertenece al useReducer, 
	// 	//por q los objetos son pasados como referencia en javascript
	// 	dispatch(action);
	// 	reset();
	// }

	const handleDelete = (id) => {
		const action = {
			type: 'delete',
			payload: id,
		};
		dispatch(action);
	}

	const handleToogle = (id) => {
		dispatch({
			type: 'toogle',
			payload: id,
		});
	}

	const handleAdd = (newTodo) => {
		dispatch({
			type: 'add',
			payload: newTodo,
		});
	}
	
	return (
		<div>
			<h1>TodoApp ({ todos.length })</h1>
			<hr />
			<div className="row">
				<div className="col-7">
					<TodoList 
						todos={ todos }
						handleToogle={ handleToogle }
						handleDelete= { handleDelete }
					/>
					{/* <ul className="list-group list-group-flush">
						{
							todos.map((todo, index) => (
								<li key={todo.id} className="list-group-item">
									<p
										onClick={ () => handleToogle(todo.id) }
										className={ `${ todo.done && 'complete' }` }
									>
											{ index + 1}. { todo.desc }
									</p>
									<button
										onClick={ () => handleDelete(todo.id) }
										className="btn btn-danger"
										type="button"
									>Borrar</button>
								</li>
							))
						}
					</ul> */}
				</div>
				<div className="col-5">
					{/* <h4>Agregar TODO</h4>
					<hr/>
					<form onSubmit={ handleSubmit }>
						<input
							type="text"
							name="description"
							className="form-control"
							placeholder="Aprender ..."
							autoComplete="off"
							value={ description }
							onChange={ handleInputChange }
						/>
						<button
							type="submit"
							className="btn btn-outline-primary mt-2 w-100">
							Agregar
						</button>
					</form> */}
					<TodoAdd handleAdd={handleAdd}/>
				</div>
			</div>
		</div>
	)
}
