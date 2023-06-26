import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fileName: '',
};

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setFileName(state, action) {
			state.fileName = action.payload;
		},
	},
});

export default formSlice.reducer;
