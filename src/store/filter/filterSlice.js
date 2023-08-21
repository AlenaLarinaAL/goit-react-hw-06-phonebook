import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filteredContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filteredContacts } = filterSlice.actions;
export const filter = filterSlice.reducer;
