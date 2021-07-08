import jsonReducer from './jsonReducer';
import { combineReducers } from 'redux';

import undoable from 'redux-undo';

const allReducers = combineReducers({
	jsonReducer: undoable(jsonReducer, {
		limit: 25
	})
});

export default allReducers;
