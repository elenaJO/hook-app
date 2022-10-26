import React from 'react'
import PropTypes from 'prop-types';

export const TodoListItem = ({todo, index, handleToogle, handleDelete}) => {
	return (
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
	)
}

TodoListItem.protoTypes = {
	index: PropTypes.number.isRequired,
	todo: PropTypes.array.isRequired,
	handleToogle: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
}