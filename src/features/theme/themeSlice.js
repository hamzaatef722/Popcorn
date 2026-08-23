import { createSlice } from "@reduxjs/toolkit";
import { loadFromStorage, saveToStorage } from "../../utils/localStorage";

const STORAGE_KEY = "popcorn:theme";

const prefersDark =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-color-scheme: dark)").matches;

const initialState = {
  mode: loadFromStorage(STORAGE_KEY, prefersDark ? "dark" : "light"),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "dark" ? "light" : "dark";
      saveToStorage(STORAGE_KEY, state.mode);
    },
    setTheme(state, action) {
      state.mode = action.payload;
      saveToStorage(STORAGE_KEY, state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const selectTheme = (state) => state.theme.mode;

export default themeSlice.reducer;
