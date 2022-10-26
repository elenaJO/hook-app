import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {
	const { user, setUser  } = useContext(UserContext);

	//el context sufrio una modificacion y afecto a los demas
	const handleClick = () => {
		setUser({});
	}

	return (
		<div>
			<h1>AboutScreen</h1>
			<hr/>
			<pre>
				{ JSON.stringify(user, null, 4) }
			</pre>
			<button 
				className="btn btn-warning my-2"
				onClick={ handleClick }
			>
				Logout
			</button>
		</div>
	)
}
