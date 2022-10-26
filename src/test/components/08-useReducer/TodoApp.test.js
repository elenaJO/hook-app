import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en el componente <TodoApp/>', () => {
	const wrapper = shallow(<TodoApp/>);
	//estoy modificando el setItem del ocal storage a un mock de jest para verificar si se llama
	Storage.prototype.setItem = jest.fn(() => {});

	test('debe mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	})

	test('debe de agregar un TODO ', () => {
		//mount cuando necesitamos probar todo el general, es igual al shallow solo q es as general
		const wrapper = mount(<TodoApp/>);
		//necesitamos envolverlo en un act cuando usamos el mount
		act(() => {
			wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[0]);
			wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[1]); //lo estoy ejecutando
		});
		expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
		expect(localStorage.setItem).toHaveBeenCalledTimes(2); //se llamo dos vecesel local storage
	})

	test('debe eliminar un TODO', () => {
		wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[0]);
		wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
		expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
	})
	
})