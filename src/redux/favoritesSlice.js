import { createSlice } from "@reduxjs/toolkit";

const initialState =
  localStorage.getItem("favorites") !== null
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: favorite }) => {
      const found = state.some((f) => f.name === favorite.name);
      if (found) {
        const index = state.findIndex((item) => item.name === favorite.name);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(favorite);
      }
      localStorage.setItem("favorites", JSON.stringify(state));
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
