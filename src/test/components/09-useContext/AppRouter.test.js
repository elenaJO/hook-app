import { mount } from 'enzyme';
import React from 'react';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

describe('Pruebas AppRouter', () => {
	const user = {
		name: 'Elena',
		email: 'elena@gmail.com'
	};

	const wrapper = mount(
		<UserContext.Provider value={{
			user
		}}>
			<AppRouter/>
		</UserContext.Provider>
	);

	test('debe mostrarse correctamente ', () => {
		expect(wrapper).toMatchSnapshot();
	})
})
