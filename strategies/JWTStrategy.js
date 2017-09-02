const ExtractJwt  = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const Users       = [ {
	id      : 1,
	name: 'samsepi0l'
}, {
	id      : 2,
	name: 'D0loresH4ze'
} ]

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
	secretOrKey   : 'wtfisthisshit'
};

const Strategy = new JwtStrategy(jwtOptions, (payload, next) => {
	console.log('Payload received', payload);
	const user = Users.find(user => user.id = payload.id);
	if(user) {
		next(null, user);
	}
	else {
		next(null, false)
	}
});

exports.jwtOptions = jwtOptions;
exports.default    = Strategy;