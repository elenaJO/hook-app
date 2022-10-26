import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en el componente <TodoList/>', () => {
	const handleToogle = jest.fn();
	const handleDelete = jest.fn();
	const wrapper = shallow(
		<TodoList
			todos={ demoTodos }
			handleDelete= { handleDelete}
			handleToogle= { handleToogle}
		/>
	)

	test('debe mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	})

	test('debe tener dos <TodoListItem/>', () => {
		//el ToBe es como ===
		expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

		//se utiliza el toEqual ya q es un objeto y no funciona el === ya q estan en espacios de memoria diferente
		//at extrae el primer elemento
		expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
	})
})
