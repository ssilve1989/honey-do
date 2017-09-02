import React from 'react';
import Login from '../components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default () => (
	<Router>
		<main className="container-fluid">
			<Switch>
				<Route exact path="/" component={ Login } />
			</Switch>
		</main>
	</Router>
)