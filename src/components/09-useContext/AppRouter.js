//puede tener mas de un router
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
	Redirect,
} from 'react-router-dom';
import{ AboutScreen } from './AboutScreen';
import{ LoginScreen } from './LoginScreen';
import{ HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
	return (
		<Router>
			{/* recomiendan que este encerrado en un div */}
			<div>
				<NavBar />
				<div className="container">
					<Switch>
						{/* estoy en la ruta /login y me muestra el HomeScreen es por q el path evalua como expresion regular como ve que 
						la ruta tiene / y coincidemuestra el HomeScreen
						<Route path="/" component={ HomeScreen }/> podemos la ruta / abajo o poner exact*/}
						<Route exact path="/" component={ HomeScreen }/>
						<Route exact path="/about" component={ AboutScreen }/>
						<Route exact path="/login" component={ LoginScreen }/>

						{/* //si no encuentra la ruta podemos poner eso ya q es un switch es el default sino ponemos:
						<Route component={ HomeScreen }/> */}
						{/* si no encuentra redirecciona al / */}
						<Redirect to="/"/>
					</Switch>
				</div>
			</div>
		</Router>
	)
}
