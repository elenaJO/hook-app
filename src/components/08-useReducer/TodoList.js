import React from 'react'
import './style.css';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleToogle, handleDelete }) => {
	return (
		<ul className="list-group list-group-flush">
			{
				todos.map((todo, index) => (
					// <li key={todo.id} className="list-group-item">
					// 	<p
					// 		onClick={ () => handleToogle(todo.id) }
					// 		className={ `${ todo.done && 'complete' }` }
					// 	>
					// 			{ index + 1}. { todo.desc }
					// 	</p>
					// 	<button
					// 		onClick={ () => handleDelete(todo.id) }
					// 		className="btn btn-danger"
					// 		type="button"
					// 	>Borrar</button>
						
					// </li>
					<TodoListItem
						key={todo.id}
						todo={todo}
						index={index}
						handleToogle={ handleToogle }
						handleDelete={ handleDelete }
					/>
				))
			}
		</ul>
	)
}
