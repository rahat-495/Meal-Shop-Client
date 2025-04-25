import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TSearchState = {
  searchTerm?: string;
};

const initialState: TSearchState = {
  searchTerm: "",
};

const searchStateSlice = createSlice({
  name: "searchState",
  initialState,
  reducers: {
    setSearchState: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

// Exporting actions
export const { setSearchState } = searchStateSlice.actions;

// Export Selector
export const selectSearchState = (state: RootState) =>
  state.combinedPersist.search;

// Exporting default reducers
export default searchStateSlice.reducer;
