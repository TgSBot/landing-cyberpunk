import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import formReducer from './reducers/Form';

const rootReducer = combineReducers({
	formReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
