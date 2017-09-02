import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		users: []
	}

	componentDidMount() {
		axios.post('/users', {
			name    : 'samsepi0l',
			password: 'anything'
		})
			.then(response => console.log(response))
			.catch(err => console.error(err));
	}

	render() {
		return (
			<div className="App">
				<h1>Users</h1>
				{ this.state.users.map(user =>
					<div key={ user.id }>{ user.username }</div>
				) }
			</div>
		);
	}
}

export default App;
