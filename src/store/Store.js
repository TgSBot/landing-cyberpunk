import formReducer from './reducers/Form';
const { combineReducers, configureStore } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
	formReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
