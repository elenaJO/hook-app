import { shallow } from 'enzyme';
import React from 'react';
import { UseRealRef } from '../../../components/04-useRef/UseRealRef';

describe('Pruebas en <UseRealRef/>', () => {
	const wrapper = shallow(<UseRealRef/>);

	test('debe mostrarse correctamente', () => {
		//shallow -> poner solo el compoenete fuera de contexto demanera aislada
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
	})

	test('debe mostrarse el componente <MultipleCustomHook/>', () => {
		const button = wrapper.find('button');
		button.simulate('click', true);
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
	})
})