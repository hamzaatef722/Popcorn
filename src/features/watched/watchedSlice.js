import { createSlice } from "@reduxjs/toolkit";
import { loadFromStorage, saveToStorage } from "../../utils/localStorage";

const STORAGE_KEY = "popcorn:watched";

// Shape of an item:
// { id, mediaType, title, poster, year, runtime, tmdbRating, userRating, watchedAt }
const initialState = {
  items: loadFromStorage(STORAGE_KEY, []),
};

const watchedSlice = createSlice({
  name: "watched",
  initialState,
  reducers: {
    addToWatched: {
      reducer(state, action) {
        const withoutExisting = state.items.filter(
          (i) => i.id !== action.payload.id,
        );
        state.items = [...withoutExisting, action.payload];
        saveToStorage(STORAGE_KEY, state.items);
      },
      prepare(item) {
        return { payload: { ...item, watchedAt: new Date().toISOString() } };
      },
    },
    removeFromWatched(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveToStorage(STORAGE_KEY, state.items);
    },
  },
});

export const { addToWatched, removeFromWatched } = watchedSlice.actions;

export const selectWatched = (state) => state.watched.items;
export const selectIsWatched = (id) => (state) =>
  state.watched.items.some((i) => i.id === id);

export default watchedSlice.reducer;
