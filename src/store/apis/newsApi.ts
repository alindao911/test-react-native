import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../../utils/constants';
import {HackerNewsStory} from '../types/news';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: builder => ({
    getTopStories: builder.mutation<number[], any>({
      query: () => ({
        url: 'topstories.json',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }),
    }),
    getStoryItem: builder.mutation<HackerNewsStory, {storyId: number}>({
      query: payload => ({
        url: `item/${payload.storyId}.json`,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }),
    }),
    getUser: builder.mutation<any, {userId: number}>({
      query: payload => ({
        url: `user/${payload.userId}.json`,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useGetTopStoriesMutation,
  useGetStoryItemMutation,
  useGetUserMutation,
} = newsApi;
