const Express    = require('express');
const jwtOptions = require('../strategies/JWTStrategy').jwtOptions;
const jwt        = require('jsonwebtoken');

const Users = [{
	id: 1,
	name: 'samsepi0l',
	password: 'anything'
}, {
	id: 2,
	name: 'D0loresH4ze',
	password: 'anything'
}];

const Router = Express.Router();

Router.post('/', (req, res) => {
	const { name, password } = req.body;
	const user               = Users.find(user => user.name === name);
	if(!user) {
		res.status(401).json({ message: 'no such user found' });
	}

	if(user.password === password) {
		const payload = { id: user.id };
		const token   = jwt.sign(payload, jwtOptions.secretOrKey);
		res.json({ message: 'ok', token });
	}
	else {
		res.status(401).json({ message: 'Passwords did not match ' });
	}
});

module.exports = Router;