import jsonReducer from './jsonReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

import undoable from 'redux-undo';

const allReducers = combineReducers({
	jsonReducer: undoable(jsonReducer, {
		limit: 25
	}),
	userReducer
});

export default allReducers;
