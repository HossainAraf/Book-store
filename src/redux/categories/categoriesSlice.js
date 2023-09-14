import { createSlice } from '@reduxjs/toolkit';

// STATE
const initialCategoriesState = {
  categories: [],
  status: 'Under construction',
};

// CREATE A SLICE USING createSlice
const categoriesSlice = createSlice({
  name: 'category',
  initialState: initialCategoriesState,
  reducers: {
    updateStatus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export const { status, updateStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
