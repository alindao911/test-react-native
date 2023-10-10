import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import NewsService from '../../services/NewsService';
import {HackerNewsStory} from '../types/news';

export interface NewsState {
  topNews: number[];
  topNewsItems: HackerNewsStory[] | [];
}

const initialState: NewsState = {
  topNews: [],
  topNewsItems: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    setNews: (state, action: PayloadAction<number[]>) => {
      const newsService = new NewsService();
      const topTenStories = newsService.getRandomItemsFromArray(
        action.payload,
        10,
      );
      state.topNews = topTenStories;
    },
    setTopNewsItem: (state, action: PayloadAction<HackerNewsStory[]>) => {
      state.topNewsItems = action.payload;
    },
  },
});

export const {setNews, setTopNewsItem} = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
