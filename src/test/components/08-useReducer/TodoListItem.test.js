import { shallow } from 'enzyme';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en el componente <TodoListItem/>', () => {
	const handleToogle = jest.fn();
	const handleDelete = jest.fn();
	const wrapper = shallow(
		<TodoListItem 
			todo={ demoTodos[0] }
			index={ 0 }
			handleToogle={ handleToogle }
			handleDelete={ handleDelete }
		/>
	)

	test('debe mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	})

	test('debe de llamar la funcion handleDelete', () => {
		const button = wrapper.find('button');
		button.simulate('click');
		expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
	})

	test('debe de llamar la funcion handleToogle', () => {
		const p = wrapper.find('p');
		p.simulate('click');
		//se dispara con el parametro demoTodos[0].id
		expect(handleToogle).toHaveBeenCalledWith(demoTodos[0].id);
	})

	test('debe mostrarse el texto correctamente', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(`1. ${ demoTodos[0].desc }`);
	})

	test('debe tener la clase complete si el TODO.done === true', () => {
		const todo = demoTodos[0];
		todo.done = true;
		const wrapper = shallow(
			<TodoListItem 
				todo={ demoTodos[0] }
				index={ 0 }
			/>)
		
			//si tiene la clase complete
		expect(wrapper.find('p').hasClass('complete')).toBe(true);	
	})
})