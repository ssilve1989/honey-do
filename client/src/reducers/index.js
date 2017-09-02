import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

const App = (state = {}, action) => {
	switch(action.type) {
	default:
		return state;
	}
};

export default combineReducers({
	app: App,
	form
});