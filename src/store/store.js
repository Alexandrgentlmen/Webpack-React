import { configureStore } from '@reduxjs/toolkit';
import { spacexApi } from './services/spacexApi'
import lunchesReducer from './lunchesSlice.js';

export const store = configureStore({
	reducer: {
		lunches: lunchesReducer,
		[spacexApi.reducerPath]: spacexApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(spacexApi.middleware),
});
