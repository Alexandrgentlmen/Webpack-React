import { configureStore } from '@reduxjs/toolkit';
import { spacexApi } from './services/spacexApi'

export const store = configureStore({
	reducer: {
		[spacexApi.reducerPath]: spacexApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(spacexApi.middleware),
});
