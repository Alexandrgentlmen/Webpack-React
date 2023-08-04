import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spacexApi = createApi({
	reducerPath: 'spacexApi',
	tagTypes: ['spacex'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.spacexdata.com/v4/'
	}),

	endpoints: (builder) => ({
		getAllLunches: builder.query({
			query: () => `launches`,
		}),
		getLunches: builder.mutation({
			query: () => ({
				url: `launches/query`,
				method: 'POST',
				body: {
					options: {
						page: 1,
						limit: 2
					}
				},
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
				},
			})
		}),
	}),
});

export const { useGetAllLunchesQuery, useGetLunchesMutation } = spacexApi;