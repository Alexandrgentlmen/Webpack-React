import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spacexdataApi = createApi({
	reducerPath: 'spacexdataApi',
	tagTypes: ['lunches'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.spacexdata.com/v4/'
	}),

	endpoints: (builder) => ({
		getSpacexdata: builder.mutation({
			query: () => ({
				url: `launches/query`,
				method: 'POST',
				body: {
					page: 1,
				}
			})
		}),
	}),
});

export const { useGetSpacexdataMutation } = spacexdataApi;