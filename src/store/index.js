import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missionsSlice';

export default configureStore({
	reducer: {
		missions: missionsReducer,
	}
})