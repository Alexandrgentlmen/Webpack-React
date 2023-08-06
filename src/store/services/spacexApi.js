import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spacexApi = createApi({
	reducerPath: 'spacexApi',
	tagTypes: ['Lunches'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.spacexdata.com/v4/'
	}),

	endpoints: builder => ({
		getImgRocket: builder.query({
			query: (id) => `rockets/${id}`,
		}),
		updateLunches: builder.mutation({
			query(params) {

				return {
					url: `launches/query`,
					method: 'POST',
					body: {
						query: {
							'date_utc': {
								'$gte': "2015-01-01T00:00:00.000Z",
								'$lte': "2019-01-01T00:00:00.000Z"
							},
							success: true,
						},
						options: {
							page: params.page,
							limit: 8,
							'sort': {
								'date_utc': params.sort,
							}
						}
					},
					headers: {
						'Content-Type': 'application/json; charset=UTF-8',
					}
				}
			},
		}),
	}),
});

export const { useGetImgRocketQuery, useUpdateLunchesMutation } = spacexApi;
