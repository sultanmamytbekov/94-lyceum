
import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./api/news/news";
import { api as indexApi } from "./api"; // базовый API, в который инжектятся upload endpoints

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [indexApi.reducerPath]: indexApi.reducer, // подключаем базовый api для upload
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(newsApi.middleware)
      .concat(indexApi.middleware), // подключаем middleware базового api
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;