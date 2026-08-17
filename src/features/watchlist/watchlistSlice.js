import { createSlice } from "@reduxjs/toolkit";
import { loadFromStorage, saveToStorage } from "../../utils/localStorage";

const STORAGE_KEY = "popcorn:watchlist";

// Shape of an item: { id, mediaType: "movie" | "tv", title, poster, year, addedAt }
const initialState = {
  items: loadFromStorage(STORAGE_KEY, []),
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: {
      reducer(state, action) {
        const exists = state.items.some((i) => i.id === action.payload.id);
        if (!exists) state.items.push(action.payload);
        saveToStorage(STORAGE_KEY, state.items);
      },
      prepare(item) {
        return { payload: { ...item, addedAt: new Date().toISOString() } };
      },
    },
    removeFromWatchlist(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveToStorage(STORAGE_KEY, state.items);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export const selectWatchlist = (state) => state.watchlist.items;
export const selectIsInWatchlist = (id) => (state) =>
  state.watchlist.items.some((i) => i.id === id);

export default watchlistSlice.reducer;
