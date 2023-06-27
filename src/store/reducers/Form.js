import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	firstName: '',
	email: '',
	fileName: '',
	checkbox: false,
};

export const formSlice = createSlice({
	name: 'Form',
	initialState,
	reducers: {
		changeFirstName(state, action) {
			state.firstName = action.payload;
		},
		changeEmail(state, action) {
			state.email = action.payload;
		},
		changeFileName(state, action) {
			state.fileName = action.payload;
		},
		changeCheckbox(state, action) {
			state.checkbox = action.payload;
		},
	},
});

export default formSlice.reducer;
