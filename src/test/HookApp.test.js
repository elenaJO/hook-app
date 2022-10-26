import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Prueba del componente', () => {

	test('debe mostrar <HookApp /> correctamente', () => {
		const wrapper = shallow(<HookApp/>);
		expect(wrapper).toMatchSnapshot();
	})
})