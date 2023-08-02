import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spacexdataApi = createApi({
	reducerPath: 'spacexdataApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v4/' }),
	endpoints: (builder) => ({
		getSpacexdata: builder.query({
			query: (name) => `missions/${name}`,
		}),
	}),
});

export const { useGetSpacexdataQuery } = spacexdataApi;