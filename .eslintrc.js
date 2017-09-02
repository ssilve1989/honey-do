module.exports = {
	"parser"       : "babel-eslint",
	"globals"      : {
		fetch: true
	},
	"env"          : {
		"browser" : true,
		"commonjs": true,
		"es6"     : true,
		"node"    : true
	},
	"extends"      : "eslint:recommended",
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx"                         : true
		},
		"sourceType"  : "module"
	},
	"plugins"      : [
		"react"
	],
	"rules"        : {
		"react/jsx-uses-react"    : 2,
		"react/react-in-jsx-scope": 2,
		"react/jsx-uses-vars"     : 2,
		"indent"         : [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes"         : [
			"error",
			"single"
		],
		"semi"           : [
			"warn",
			"never"
		]
	}
};