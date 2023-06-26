import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import formReducer from './reducer/Form';

const rootReducer = combineReducers({
	formReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
