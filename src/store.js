import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./features/watchlist/watchlistSlice";
import watchedReducer from "./features/watched/watchedSlice";
import themeReducer from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    watched: watchedReducer,
    theme: themeReducer,
  },
});
