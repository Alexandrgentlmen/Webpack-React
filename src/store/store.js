import { configureStore } from '@reduxjs/toolkit';
import { spacexdataApi } from './services/spacexdataApi.js'
import missionsReducer from './missionsSlice.js';

export const store = configureStore({
	reducer: {
		[spacexdataApi.reducerPath]: spacexdataApi.reducer,
		missions: missionsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(spacexdataApi.middleware),
});
