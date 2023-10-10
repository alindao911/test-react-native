import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk, {ThunkAction, ThunkMiddleware} from 'redux-thunk';
import {newsReducer} from './reducers/news';
import reduxStorage from './storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {useDispatch} from 'react-redux';
import {newsApi} from './apis/newsApi';

const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: reduxStorage,
  timeout: 0,
  whitelist: ['news'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        warnAfter: 1028,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: {warnAfter: 1028},
    }).concat(thunk as ThunkMiddleware, newsApi.middleware),
});

export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
